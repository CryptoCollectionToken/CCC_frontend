<template>
  <div>
    <Header></Header>
    <div>
      <img style="margin-left:40%;padding-top:20px;" alt="" width="20%" srcset="/static/pic/纪念币交易页面拍卖主图.png"/>
      <div style="text-align: center;">{{cointype.value}}{{$t('value')}}{{$t(cointype.cointype)}}</div>
      <div style="margin-top: 20px;">
        <div v-for="(coin, key) in coins" :key="key">
          <div class="coin">
            <div class="coinLogo">
              <img alt="" :srcset="coin.url"/>
              <div>{{$t('transaction_serial_number')}}：{{coin.coinnumber}}</div>
            </div>
            <div class="coinInner">
              <div>{{$t('transaction_seller')}}：{{coin.owner}}</div>
              <div>{{$t('transaction_price')}}：{{coin.sellallvalue}}</div>
              <div>{{$t('transaction_countdown')}}：{{coin.selltime}}</div>
              <div>
                <a class="button is-info" @click="enter(coin.sellid)">{{$t('transaction_buy')}}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--<div>
      <img style="margin-left:40%;padding-top:20px;" alt="" width="20%" srcset="/static/pic/纪念币交易页面拍卖主图.png"/>
      <div style="text-align: center;">{{cointype.value}}{{$t('value')}}{{$t(cointype.cointype)}}</div>
      <br/>
      <div class="columns is-multiline" style="padding-left:10%;padding-right:10%;">
        <div v-for="(coin, key) in coins" :key="key" class="column is-one-quarter">
          <span style="padding:5px;">
            <div><img alt="" width="100%" :srcset="coin.url"/></div>
            <div style="text-align:center;">{{$t('transaction_seller')}}：{{coin.owner}}</div>
            <div style="text-align:center;">{{$t('transaction_price')}}：{{coin.sellallvalue}}</div>
            <div style="text-align:center;">{{$t('transaction_serial_number')}}：{{coin.coinnumber}}</div>
            <div style="text-align:center;">{{$t('transaction_countdown')}}：{{coin.selltime}}</div>
            <div style="text-align:center">
              <a class="button is-rounded"  @click="enter(coin.sellid)">{{$t('transaction_buy')}}</a>
            </div>
          </span>
        </div>
      </div>
    </div>-->
    <Footer></Footer>
  </div>
</template>

<script>
// const alltransactions = require("../assets/transactions.json");
// const allcoins = require("../../assets/transactions.json");
import { mapActions, mapState } from 'vuex';
import Header from '@/mobile/components/layout/Header';
import Footer from '@/mobile/components/layout/Footer';

export default {
  name: 'transactionlist',
  components: {
    Header,
    Footer
  },
  data () {
    return {
      coins: [],
      cointype: ""
    }
  },
  created: function () {
    const allcoins = this.transactions;
    this.type = this.$route.params.type;
    this.cointype = this.$route.params;
    for (const coinid in allcoins) {
      const coin = allcoins[coinid];
      console.log(this.$route.params.type + "," + coin.type + "," + this.$route.params.cointype + "," + coin.cointype + "," + this.$route.params.value + "," + coin.value);
      if (this.$route.params.type == coin.type &&
        this.$route.params.cointype == coin.cointype &&
        this.$route.params.value == coin.value) {
        this.coins.push(coin);
      }
    }
    this.coins = this.coins.sort((a, b) => {
      return a.sellvalue - b.sellvalue;
    });
  },
  methods: {
    enter: function (sellid) {
      this.$router.push({path: `/m/buycoin/${sellid}`});
    }
  },
  computed: {
    ...mapState(['transactions']),
  },
}
</script>

<style lang="scss" scoped>
  .coinLogo {
    width: 60%;
    margin-right: 10px;
  }
  .button {
    font-size: 14px;
    min-width: 100px;
  }
  .coin {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    font-size: 14px;
    margin-bottom: 20px;
    .coinInner {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
    }
  }
</style>
