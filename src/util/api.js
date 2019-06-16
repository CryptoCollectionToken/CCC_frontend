import ScatterJS from 'scatterjs-core';
import ScatterEOS from 'scatterjs-plugin-eosjs';
import Eos from 'eosjs';
import * as config from '@/config';
import PriceFormatter from './eosPriceFormatter';

ScatterJS.plugins(new ScatterEOS());

// @trick: use function to lazy eval Scatter eos, in order to avoid no ID problem.
const eos = () => ScatterJS.scatter.eos(config.network, Eos, { expireInSeconds: 60 });
// const historyeos = () => ScatterJS.scatter.eos(config.history, Eos, { expireInSeconds: 60 });

const currentEOSAccount = () => ScatterJS.scatter.identity && ScatterJS.scatter.identity.accounts.find(x => x.blockchain === 'eos');

const API = {
  async getPlayerAsync({ accountName }) {
    const { rows } = await eos().getTableRows({
      json: true,
      code: 'chainbankeos',
      scope: accountName,
      table: 'player',
      limit: 1024,
    });
    return rows;
  },
  async getRemainAmountAsync({ accountName }) {
    const { rows } = await eos().getTableRows({
      json: true,
      code: 'chainbankeos',
      scope: accountName,
      table: 'global',
      limit: 1024,
    });
    return rows[0].remainamount;
  },
  async getCCCAsync() {
    const { rows } = await eos().getTableRows({
      json: true,
      code: 'chainbankeos',
      scope: 'CCC',
      table: 'stat',
      limit: 1024,
    });
    return rows[0];
  },
  async getPoolAsync(){
    const { rows } = await eos().getTableRows({
      json: true,
      code: 'chainbankeos',
      scope: 'chainbankeos',
      table: 'dividend',
      limit: 1024,
    });
    return rows[0];
  },
  async getMyCCCAsync(eosaccount = currentEOSAccount()){
    const { rows } = await eos().getTableRows({
      json: true,
      code: 'chainbankeos',
      scope: eosaccount.name,
      table: 'accounts',
      limit: 1024,
    });
    return rows[0];
  },
  async getMyInfoAsync(eosaccount = currentEOSAccount()){
    const { rows } = await eos().getTableRows({
      json: true,
      code: 'chainbankeos',
      scope: eosaccount.name,
      table: 'playerinfo',
      limit: 1024,
    });
    return rows[0];
  },
  async getBuyBackAsync(){
    const { rows } = await eos().getTableRows({
      json: true,
      code: 'chainbankeos',
      scope: 'chainbankeos',
      table: 'buybackqueue',
      limit: 1024,
    });
    return rows;
  },
  async getCollectionAsync(){
    const { rows } = await eos().getTableRows({
      json: true,
      code: 'chainbankeos',
      scope: 'chainbankeos',
      table: 'collection',
      limit: 1024,
    });
    return rows;
  },
  async getEOSAsync() {
    const { rows } = await eos().getTableRows({
      json: true,
      code: 'eosio.token',
      scope: 'chainbankeos',
      table: 'accounts',
      limit: 1024,
    });
    return rows[0];
  },
  async getBalancesByContract({ tokenContract = 'eosio.token', accountName, symbol }) {
    return eos().getCurrencyBalance(tokenContract, accountName, symbol);
  },
  install(Vue) {
    Object.defineProperties(Vue.prototype, {
      $API: {
        get() {
          return API;
        },
      },
    });
  },
  getmyself(){
    return currentEOSAccount().name;
  },
  connectScatterAsync() {
    // alert("scatter connecting...");
    return ScatterJS.scatter.connect(config.appScatterName, { initTimeout: 2000 });
  },
  loginScatterAsync() {
    // alert("scatter logging...");
    const requiredFields = { accounts: [config.network] };
    return ScatterJS.scatter.getIdentity(requiredFields);
  },
  logoutScatterAsync() {
    return ScatterJS.scatter.forgetIdentity();
  },
  transferEOSAsync({
    from = currentEOSAccount(),
    to,
    memo = '',
    amount = 0,
  }) {
    return eos().transfer(
      from.name,
      to,
      PriceFormatter.formatPrice(amount),
      memo, {
        authorization: [`${from.name}@${from.authority}`],
      },
    );
  },
  async transferTokenAsync({
    from = currentEOSAccount(),
    to,
    memo = '',
    amount = 0,
    tokenContract = 'eosio.token',
  }) {
    const contract = await eos().contract(tokenContract);
    return contract.transfer(
      from.name,
      to,
      amount,
      memo, {
        authorization: [`${from.name}@${from.authority}`],
      },
    );
  },
  async SellCoinAsync(
    amount = '',
    memo = '',
    from = currentEOSAccount(),
  ){
    const contract = await eos().contract('chainbankeos');
    await contract.pushorder(
      from.name,
      PriceFormatter.formatPrice(amount),
      memo,
      {
        authorization: [`${from.name}@${from.authority}`],
      },
    );
  },
  async ExchangeCoinAsync(
    memo = '',
    from = currentEOSAccount(),
  ){
    const contract = await eos().contract('chainbankeos');
    await contract.exchange(
      memo,
      {
        authorization: [`${from.name}@${from.authority}`],
      },
    );
  },
  async ExchangeCoinDownAsync(
    id = 0,
    goalid = 0,
    from = currentEOSAccount(),
  ){
    const contract = await eos().contract('chainbankeos');
    await contract.exchangedown(
      id,
      goalid,
      {
        authorization: [`${from.name}@${from.authority}`],
      },
    );
  },
  async CollClaimAsync(
    type = 0,
    from = currentEOSAccount(),
  ){
    type += 1;
    const contract = await eos().contract('chainbankeos');
    await contract.collclaim(
      from.name,
      type,
      {
        authorization: [`${from.name}@${from.authority}`],
      },
    );
  },
  async BuyBackAsync(
    amount = 0,
    from = currentEOSAccount(),
  ){
    const contract = await eos().contract('chainbankeos');
    await contract.joinbuybackq(
      from.name,
      PriceFormatter.formatPriceToCCC(amount),
      {
        authorization: [`${from.name}@${from.authority}`],
      },
    );
  },
  async getCoinsAsync({ accountName }) {
    var rows = [];
    for(var i = 0; i < 20; i ++ ){
      console.log(i);
      const onerow = await eos().getTableRows({
        json: true,
        code: 'chainbankeos',
        scope: accountName,
        table: 'coin',
        limit: 65536,
        lower_bound: i*1000,
        upper_bound: i*1000+999,
      });
      // console.log(onerow.rows);
      // merge.
      rows = rows.concat(onerow.rows);
      console.log(rows.length);
    }
    return rows;
  },
  async getPlayersAsync({ accountName }) {
    const { rows } = await eos().getTableRows({
      json: true,
      code: 'chainbankeos',
      scope: accountName,
      table: 'player',
      limit: 1024,
    });
    return rows;
  },
  async getTransactionsAsync({ accountName }) {
    const { rows } = await eos().getTableRows({
      json: true,
      code: 'chainbankeos',
      scope: accountName,
      table: 'order',
      limit: 1024,
    });
    console.log(await eos().getTableRows({
      json: true,
      code: 'chainbankeos',
      scope: 'chainbankeos',
      table: 'player',
      limit: 1024,
    }));
    return rows;
  },
};

export default API;
export { eos, currentEOSAccount };
