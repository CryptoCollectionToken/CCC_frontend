<template>
  <div>
    <Header></Header>
    <div class="exchange-middle">
      <a class="button is-fullwidth is-info" @click="gotoExchangePage(type)">
        {{$t('mine_exchange')}}
      </a>
    </div>
    <div v-for="(coin, index) in coins" :key="index">
      <div class="exchange-middle">
        <div style="text-align: center;">{{coin.name}}</div>
        <!-- <img style="width: 80%;margin-left: 10%;" :src="coin.url" alt="" /> -->
        <div class="showing_picture" v-if="coin.type == 1">
          <img :src="coin.url" alt="" />
        </div>
        <div class="showing_picture_coin" v-if="coin.type == 2">
          <img :src="coin.url" alt="" />
        </div>
        <div style="text-align: center;">{{$t('mine_serial_number')}}{{coin.coinnumber}}</div>
        <div class="exchange-middle">
          <a class="button is-fullwidth is-info" @click="gotoSellPage(coin.coinnumber)">
            {{$t('mine_sell')}}
          </a>
        </div>
      </div>
    </div>
    <br/>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import { mapActions, mapState } from 'vuex';

export default {
  components: {
    Header,
    Footer
  },
  name: 'mycoin',
  data () {
    return {
      coins: [],
      type: ""
    }
  },
  created: function () {
    const allcoins = this.existcoins;
    this.type = this.$route.params.cointype;
    for(const coinid in allcoins){
      const coin = allcoins[coinid];
      // console.log(this.$route.params.type + "," + coin.type + "," + this.$route.params.cointype + "," + coin.cointype + "," + this.$route.params.value + "," + coin.value);
      if(this.$route.params.type == coin.type &&
        this.$route.params.cointype == coin.cointype &&
        this.$route.params.value == coin.value &&
        this.scatterAccount.name == coin.owner){
          this.coins.push(coin);
        }
    }
  },
  methods:{
    gotoExchangePage(type){
      this.$router.push({ path: `/exchangecoin/${type}`});
    },
    gotoSellPage(coinnumber){
      this.$router.push({ path: `/sellcoin/${coinnumber}`});
    }
  },
  computed: {
    ...mapState(['existcoins','scatterAccount']),
  },
}
</script>

<style lang="scss" scoped>
  $baseColor: #5585F9;
  .intro-outer {
    padding: 10px 20px;
    .intro-title {
      padding-left: 10px;
      border-left: 2px solid $baseColor;
      color: $baseColor;
      font-weight: bolder;
    }
  }
  .exchange-middle{
    padding: 10px
  }
</style>
