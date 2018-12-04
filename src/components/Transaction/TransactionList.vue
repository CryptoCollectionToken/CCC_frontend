<template>
  <div>
    <img style="margin-left:40%;" alt="" width="20%" srcset="../../../static/pic/纪念币交易页面拍卖主图.png"/>
    <div style="text-align: center;">{{name}}</div>
    <nav class="has-text-centered" style="margin-left:30%;margin-right:30%;">
      <span class="select">
        <select>
          <option selected>{{$t('transaction_sorting')}}</option>
          <option>id</option>
        </select>
      </span>
      <span class="select">
        <select>
          <option selected>{{$t('transaction_price')}}</option>
          <option>id</option>
        </select>
      </span>
      <span class="select">
        <select>
          <option selected>{{$t('transaction_high_to_low')}}</option>
          <option>{{$t('transaction_low_to_high')}}</option>
        </select>
      </span>
    </nav>
    <br/>
    <div class="columns is-multiline" style="padding-left:10%;padding-right:10%;">
      <div v-for="(coin,key) in coins" key="index" class="column is-one-quarter">
        <span style="padding:5px;">
          <div><img alt="" width="100%" :srcset="coin.url"/></div>
          <div style="margin-left:10%;">{{$t('transaction_seller')}}{{coin.owner}}</div>
          <div style="margin-left:10%;">{{$t('transaction_price')}}{{coin.sellvalue}}</div>
          <div style="margin-left:10%;">{{$t('transaction_serial_number')}}{{coin.coinnumber}}</div>
          <div style="margin-left:10%;">{{$t('transaction_countdown')}}{{coin.selltime}}</div>
          <div style="text-align:center">
            <a class="button is-rounded"  @click="enter(coin.sellid)">购买</a>
          </div>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
// const alltransactions = require("../assets/transactions.json");
// const allcoins = require("../../assets/transactions.json");
import { mapActions, mapState } from 'vuex';

export default {
  name: 'transactionlist',
  data () {
    return {
        coins: [],
        name: "",
    //   transactions: alltransactions,
    }
  },
  created: function () {
    const allcoins = this.transactions;
    console.log("----");
    console.log(allcoins);
    this.type = this.$route.params.type;
    for(const coinid in allcoins){
      const coin = allcoins[coinid];
      if(this.$route.params.type == coin.type &&
        this.$route.params.cointype == coin.cointype &&
        this.$route.params.value == coin.value){
          this.coins.push(coin);
          this.name = coin.name;
        }
    }
  },
  methods: {
    enter: function (sellid) {
        // console.log(e.toElement.innerText);
        this.$router.push({ path: `/buycoin/${sellid}`});
    }
  },
  computed: {
    ...mapState(['transactions']),
  },
}
</script>

<style scoped>

</style>
