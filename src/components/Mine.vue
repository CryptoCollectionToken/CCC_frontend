<template>
  <div>
    <img style="margin-left:30%;" alt="" width="40%" srcset="../../static/pic/我的纪念币页面主图.png"/>
    <div style="text-align: center;">{{$t('mine_have')}}</div>
    <br/>
    <div class="columns is-multiline is-mobile" style="padding-left:10%;padding-right:10%;">
      <div v-for="(cointype,key) in mycoins" key="index" class="column is-one-quarter">
        <span>{{cointype.value}}{{$t('value')}}{{$t(cointype.cointype)}}{{coinamounts[cointype.value + cointype.cointype]}}{{$t('mine_have_after')}}<span v-if="cointype.type == 2">{{$t('coin')}}</span></span>
      </div>
    </div>
    <div class="columns is-multiline is-mobile" style="padding-left:20%;padding-right:20%;">
      <a @click="enter(coin.cointype)" v-for="(coin,key) in coins" key="index" class="column is-one-quarter">
        <span style="padding:5px;">
          <div><img alt="" width="100%" style="height:160px" :srcset="coin.logourl"/></div>
          <div style="text-align:center">{{$t(coin.cointype)}}</div>
        </span>
      </a>
    </div>
  </div>
</template>

<script>
const allcoins = require("../assets/coins.json");
import { mapActions, mapState } from 'vuex';

export default {
  name: 'mine',
  data () {
    return {
      coins: allcoins,
      mycoins: [],
      coinamounts: {},
    }
  },
  methods: {
			enter: function (type) {
        // console.log(e.toElement.innerText);
        this.$router.push({ path: `/selectcoin/${type}`});
      }
  },
  computed: {
    ...mapState(['existcoins','scatterAccount']),
  },
  created: function () {
    this.coinamounts = {};
    const allcoins = this.existcoins;
    for(const coinid in allcoins){
      const coin = allcoins[coinid];
      // console.log(this.$route.params.type + "," + coin.type + "," + this.$route.params.cointype + "," + coin.cointype + "," + this.$route.params.value + "," + coin.value);
      if(this.scatterAccount.name == coin.owner){
        const onecointype = coin.value + coin.cointype;
        if(this.coinamounts[onecointype] === undefined){
          this.coinamounts[onecointype] = 1;
          this.mycoins.push(coin);
        }else{
          this.coinamounts[onecointype] += 1; 
        }
      }
    }
    console.log(this.mycoins);
    console.log(this.coinamounts);
  },
}
</script>

<style scoped>

</style>
