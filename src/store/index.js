import Vue from 'vue';
import Vuex from 'vuex';
import { Toast } from 'buefy/dist/components/toast';
// import Geo from '@/util/geo';
import API from '@/util/api';
import ui from './ui';
const allcoins = require("../assets/coins.json");
const allcointypes = require("../assets/cointypes.json");

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    ui,
  },
  state: {
    isScatterConnected: false,
    scatterAccount: null,
    balances: {
      eos: '0.0000 EOS',
      cmu: '0.0000 CMU',
    },
    isScatterLoggingIn: false,
    isLoadingData: false,
    landInfo: {},
    landInfoUpdateAt: null,
    marketInfo: {},
    stakedInfo: {},
    existcoins: [],
    coinvalues: [
      [1,1,2,5,10],   //btc
      [1,1,2,5,10],   //eth
      [1,1,2,5,10],   //lt
      [1,1,5,10,50,100],   //ba
      [1,1,5,10,20,50],   //ri
      [1,1,2,5,10],   //og
      [1,1,2,5,10,20],   //ae
      [1,1,2,5,10],   //as
      [1,1,2,5,10,20,50,100],   //ud
      [1,1,2,5,10],   //pt
      [1,1,2,5,10],   //mo
      [1,1,2,5,10],   //qt
      [5,5,10,20,50,100],   //bt
      [5,5,10,20,50],   //ht
      [5,5,10,20,50,100],   //eos
      [10,10,20,50,100],   //io
      [10,10,20,50,100],   //zb
      [50,50,100,200,500,1000],   //xlma
      [100,100,200,500,1000],   //ada
      [500,500,1000,2000,5000],   //dg
      [500,500,1000,2000,5000],   //rp
      [500,500,1000,2000,5000]    //tr
    ],
    coins: allcoins,
    cointypes: allcointypes,
  },
  mutations: {
    setLandInfo(state, landInfo) {
      state.landInfo = landInfo;
      state.landInfoUpdateAt = new Date();
    },
    setMarketInfo(state, marketInfo) {
      state.marketInfo = marketInfo;
    },
    setStakedInfo(state, stakedInfo) {
      state.stakedInfo = stakedInfo;
    },
    setCoins(state, Coins){
      state.existcoins = Coins;
    },
    setIsScatterLoggingIn(state, isScatterLoggingIn) {
      state.isScatterLoggingIn = isScatterLoggingIn;
    },
    setIsLoadingData(state, isLoadingData) {
      state.isLoadingData = isLoadingData;
    },
    setIsScatterConnected(state, isScatterConnected) {
      state.isScatterConnected = isScatterConnected;
    },
    setScatterAccount(state, account) {
      state.scatterAccount = account;
    },
    setMyBalance(state, { symbol, balance }) {
      state.balances[symbol] = balance;
    },
  },
  actions: {
    async connectScatterAsync({ commit }) {
      console.log('Connecting to Scatter desktop...');
      const connected = await API.connectScatterAsync();
      console.log('Connect Scatter result: ', connected);
      if (connected) {
        commit('setIsScatterConnected', true);
      }
    },
    async getMyBalances({ commit, state }) {
      const { name } = state.scatterAccount;
      const balances = await Promise.all([
        API.getBalancesByContract({ symbol: 'eos', accountName: name }),
        API.getBalancesByContract({ symbol: 'cmu', accountName: name, tokenContract: 'dacincubator' }),
      ]);
      const [eos, cmu] = balances.flat();
      commit('setMyBalance', { symbol: 'eos', balance: eos });
      commit('setMyBalance', { symbol: 'cmu', balance: cmu });
    },
    async updateLandInfoAsync({ commit }) {
      commit('setIsLoadingData', true);
      try {
        const landInfo = {};
        const rows = await API.getLandsInfoAsync();
        rows.forEach((row) => {
          const countryCode = Geo.landIdToCountryCode(row.id);
          landInfo[countryCode] = {
            ...row,
            code: countryCode,
          };
        });
        commit('setLandInfo', landInfo);
      } catch (err) {
        console.error('Failed to fetch land info', err);
      }
      commit('setIsLoadingData', false);
    },
    async updateMarketInfoAsync({ commit, state }) {
      try {
        const marketInfoTable = await API.getMarketInfoAsync();
        const marketInfo = marketInfoTable[0];
        marketInfo.coin_price = `${((parseFloat(marketInfo.supply.split(' ')[0])) / 10000000000).toFixed(4).toString()} EOS`;
        marketInfo.supply = `${(parseFloat(marketInfo.supply.split(' ')[0]) - 40000000).toFixed(4).toString()} CMU`;
        // price, balance, coin_price
        commit('setMarketInfo', marketInfo);
      } catch (err) {
        console.error('Failed to fetch market info', err);
      }
    },
    async getMyStakedInfo({ commit, state }) {
      try {
        const stakedInfoList = await API.getMyStakedInfoAsync({accountName: state.scatterAccount.name});
        if (stakedInfoList[0] == null) {
          commit('setStakedInfo', {"to":"","staked":0});
        } else {
          commit('setStakedInfo', stakedInfoList[0]);
        }
      } catch (err) {
        console.error('Failed to fetch staked info', err);
      }
    },
    async loginScatterAsync({ commit, dispatch }) {
      commit('setIsScatterLoggingIn', true);
      try {
        const identity = await API.loginScatterAsync();
        console.log("logging..");
        if (!identity) {
          commit('setScatterAccount', null);
          return;
        }
        const account = identity.accounts.find(({ blockchain }) => blockchain === 'eos');
        commit('setScatterAccount', account);
        Toast.open({
          message: 'You successfully logged in Scatter!',
          type: 'is-success',
          queue: false,
        });
        dispatch('getMyBalances');
        // dispatch('getMyStakedInfo');
      } catch (err) {
        console.error('Failed to login Scatter', err);
        Toast.open({
          message: `Failed to log in Scatter: ${err.message}.`,
          type: 'is-danger',
          queue: false,
          duration: 5000,
        });
      }
      commit('setIsScatterLoggingIn', false);
    },
    async logoutScatterAsync({ commit }) {
      try {
        await API.logoutScatterAsync();
      } catch (err) {
        console.error('Failed to logout Scatter', err);
      }
      commit('setScatterAccount', null);
      Toast.open({
        message: 'You successfully logged out!',
        type: 'is-success',
        queue: false,
      });
    },
    async getCoins({ commit }) {
      try {
        const CoinList = await API.getCoinsAsync({accountName: 'ceshiyongeos'});
        const existcoinlist = [];
        for(const index in CoinList){
          const contractone = CoinList[index];
          const cointypenum = contractone.type % 100 - 1;
          const coinvaluenum = (contractone.type / 100).toFixed(0);
          const onecoin = {};
          const _A_ = "A";
          onecoin.id = contractone.id;
          onecoin.owner = contractone.owner;
          onecoin.contracttype = contractone.type;
          onecoin.type = cointypenum + 1;
          onecoin.cointype = this.state.coins[cointypenum].cointype;
          onecoin.value = this.state.coinvalues[cointypenum][coinvaluenum];
          onecoin.number = contractone.number;
          onecoin.coinnumber = onecoin.cointype + String.fromCharCode(parseInt(_A_.charCodeAt()) + parseInt(coinvaluenum)) + onecoin.number;
          onecoin.url = this.state.cointypes[onecoin.cointype].types[coinvaluenum].coinurl;
          existcoinlist.push(onecoin);
        }
        console.log(existcoinlist);
        if (existcoinlist[0] == null) {
          commit('setCoins', []);
        } else {
          commit('setCoins', existcoinlist);
        }
      } catch (err) {
        console.error('Failed to fetch coins', err);
      }
    },
  },
});
