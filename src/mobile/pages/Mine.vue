<template>
  <div class="mine-page">
    <Header></Header>
    <div class="home-page-inner">
      <div class="login-card">
        <div class="login-card-account">
          {{$t('mine_have')}}
        </div>
        <div class="columns is-multiline is-mobile is-gapless" style="font-size:10px;">
          <div v-for="(cointype,key) in mycoins" key="index" class="column is-one-third">
            <span>{{coinamounts[cointype.contracttype]}}{{$t('mine_have_after')}}{{cointype.value}}{{$t('value')}}{{$t(cointype.cointype)}}<span v-if="cointype.type == 2">{{$t('coin')}}</span></span>
          </div>
        </div>
      </div>
    </div>
    <div class="home-page-inner">
      <div class="login-card">
        <div class="login-card-title">
          <img style="vertical-align:middle;" src="http://www.deaso40.com/jmjnb/mobileui/我的纪念币/我 的收藏币/收 藏.png" alt="" width="32px">
          <span style="padding-left:8px;">{{$t('mine_title')}}</span>
        </div>
        <div class="login-card-mycoins">
          <div class="columns is-multiline is-mobile">
            <a @click="enter(coin.cointype)" v-for="(coin,key) in coins" key="index" class="column is-one-quarter">
              <div class="login-card-mycoins-onecoin">
                <div class="login-card-mycoins-onecoin-coinpic">
                  <img :srcset="coin.logourl" style="vertical-align: middle;padding:20%;"/>
                </div>
                <div style="text-align:center">{{$t(coin.cointype)}}</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { mapActions, mapState } from 'vuex';

const allcoins = require("../../assets/coins.json");

export default {
  components: {
    Header,
    Footer
  },
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
        this.$router.push({ path: `/m/selectcoin/${type}`});
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
      console.log(this.$route.params.type + "," + coin.type + "," + this.$route.params.cointype + "," + coin.cointype + "," + this.$route.params.value + "," + coin.value);
      if(this.scatterAccount.name == coin.owner){
        console.log(coin);
        const onecointype = coin.contracttype;
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
  .home-page-inner {
    margin-top: 10px;
  }
  .mine-page {
    background-color:rgba(239,241,245,1);
  }
  .login-card{
    background-color:rgba(255,255,255,255);
    padding: 10px;
    margin: 10px;
    &-account{
      padding: 5px;
      text-align: center;
    }
    &-title{
      padding: 10px;
      color: $baseColor;
      font-size: 16px;
      font-weight: bold;
    }
    &-mycoins{
      padding-top:10px;
      &-onecoin{
        padding: 10px;
        &-coinpic{
          padding: 10px;
          background-image:url('http://www.deaso40.com/jmjnb/mobileui/我的纪念币/我 的收藏币/椭圆形 copy 11.png');
          background-size: cover;
          background-repeat:no-repeat;
        }
      }
    }
  }
</style>
