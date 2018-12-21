import ScatterJS from 'scatterjs-core';
import ScatterEOS from 'scatterjs-plugin-eosjs';
import Eos from 'eosjs';
import * as config from '@/config';
import PriceFormatter from './eosPriceFormatter';

ScatterJS.plugins(new ScatterEOS());

// @trick: use function to lazy eval Scatter eos, in order to avoid no ID problem.
const eos = () => ScatterJS.scatter.eos(config.network, Eos, { expireInSeconds: 60 });
const historyeos = () => ScatterJS.scatter.eos(config.history, Eos, { expireInSeconds: 60 });

const currentEOSAccount = () => ScatterJS.scatter.identity.accounts.find(x => x.blockchain === 'eos');

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
  async getCoinAsync({ accountName }) {
    const { rows } = await eos().getTableRows({
      json: true,
      code: 'chainbankeos',
      scope: accountName,
      table: 'coin',
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
  async getMyCCCAsync(){
    const { rows } = await eos().getTableRows({
      json: true,
      code: 'chainbankeos',
      scope: currentEOSAccount().name,
      table: 'accounts',
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
  async getBalancesByContract({ tokenContract = 'eosio.token', accountName, symbol }) {
    return eos().getCurrencyBalance(tokenContract, accountName, symbol);
  },
  getNextPrice(land) {
    return land.price * 1.4;
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
    return ScatterJS.scatter.connect(config.appScatterName, { initTimeout: 2000 });
  },
  loginScatterAsync() {
    const requiredFields = { accounts: [config.network] };
    return ScatterJS.scatter.getIdentity(requiredFields);
  },
  logoutScatterAsync() {
    return ScatterJS.scatter.forgetIdentity();
  },
  transferEOSAsync({
    to,
    memo = '',
    amount = 0,
  }) {
    return eos().transfer(
      currentEOSAccount().name,
      to,
      PriceFormatter.formatPrice(amount),
      memo, {
        authorization: [`${currentEOSAccount().name}@${currentEOSAccount().authority}`],
      },
    );
  },
  async transferTokenAsync({
    to,
    memo = '',
    amount = 0,
    tokenContract = 'eosio.token',
  }) {
    const contract = await eos().contract(tokenContract);
    return contract.transfer(
      currentEOSAccount().name,
      to,
      amount,
      memo, {
        authorization: [`${currentEOSAccount().name}@${currentEOSAccount().authority}`],
      },
    );
  },
  async SellCoinAsync(
    amount = '',
    memo = '',
  ){
    console.log(currentEOSAccount().name);
    const contract = await eos().contract('chainbankeos');
    await contract.pushorder(
      currentEOSAccount().name,
      PriceFormatter.formatPrice(amount),
      memo,
      {
        authorization: [`${currentEOSAccount().name}@${currentEOSAccount().authority}`],
      },
    );
  },
  async CollClaimAsync(
    type = 0,
  ){
    console.log(currentEOSAccount().name);
    const contract = await eos().contract('chainbankeos');
    await contract.collclaim(
      currentEOSAccount().name,
      type,
      {
        authorization: [`${currentEOSAccount().name}@${currentEOSAccount().authority}`],
      },
    );
  },
  async BuyBackAsync(
    amount = 0,
  ){
    console.log(currentEOSAccount().name);
    const contract = await eos().contract('chainbankeos');
    await contract.joinbuybackq(
      currentEOSAccount().name,
      PriceFormatter.formatPriceToCCC(amount),
      {
        authorization: [`${currentEOSAccount().name}@${currentEOSAccount().authority}`],
      },
    );
  },
  async getCheckInRedeemCodeAsync() {
    const sha256lib = await import('js-sha256');
    const token = String(Math.floor(Math.random() * 0xFFFFFF));
    return sha256lib.sha256(token).slice(0, 10);
  },
  async redeemCodeAsync({ code }) {
    if (code.length !== 10) {
      throw new Error('Invalid redeem code');
    }
    const contract = await eos().contract('cryptomeetup');
    return contract.checkin(
      currentEOSAccount().name,
      '0196d5b5d9ec1bc78ba927d2db2cb327d836f002601c77bd8c3f144a07ddc737',
      { authorization: [`${currentEOSAccount().name}@${currentEOSAccount().authority}`] },
    );
  },
  async getCoinsAsync({ accountName }) {
    const { rows } = await eos().getTableRows({
      json: true,
      code: 'chainbankeos',
      scope: accountName,
      table: 'coin',
      limit: 1024,
    });
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
    // console.log(await historyeos().getActions({
    //   account_name: "chainbankeos", 
    //   pos: -1, 
    //   offset: -100
    // }));
    return rows;
  },
};

export default API;
export { eos, currentEOSAccount };
