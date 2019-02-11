<template>
  <div>
    <Header></Header>
    <div class="transactionPage">
      <!-- <div class="coinOuter">
        <router-link class="coinItem" v-for="(coin,key) in coins" :key="key" :to="`selecttype/${coin.cointype}`">
          <div class="coinInner">
            <div class="coin"><img :srcset="coin.logourl"/></div>
            <p>{{$t(coin.cointype)}}</p>
          </div>
        </router-link>
      </div> -->
    <!-- <div class="home-page-inner"> -->
      <div class="login-card">
        <!-- <div class="login-card-title">
          <img style="vertical-align:middle;" src="http://www.deaso40.com/jmjnb/mobileui/我的纪念币/我 的收藏币/收 藏.png" alt="" width="32px">
          <span style="padding-left:8px;">{{$t('mine_title')}}</span>
        </div> -->
        <div class="btnContainer">
          <router-link to="alltype" class="myBtn">{{$t('transaction_found')}}</router-link>
        </div>
        <div class="login-card-mycoins">
          <div class="columns is-multiline is-mobile">
            <a @click="toselect(coin.cointype)" v-for="(coin,key) in coins" key="index" class="column is-one-quarter">
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
const allcoins = require("@/assets/coins.json");
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

export default {
  name: 'transaction',
  components: {
    Header,
    Footer
  },
  data () {
    return {
      coins: allcoins,
    }
  },
  methods: {
    toselect: function (type) {
      console.log(type);
      this.$router.push({path: `/m/selecttype/${type}`});
    },
    toalltype: function (e) {
      // console.log(e.toElement.innerText);
      this.$router.push({path: `/m/alltype`});
    }
  }
}
</script>

<style lang="scss" scoped>
  $baseColor: #5585F9;
  .transactionPage {
    background-color:rgba(239,241,245,1);
    margin-top: 10px;
  }
  .btnContainer {
    text-align: center;
    position: relative;
    margin-bottom: 20px;
  }
  .myBtn {
    font-size: 14px;
    display: block;
    margin-left: 10%;
    border-radius: 50px;
    width: 80%;
    color: #5585F9;
    padding: 10px 40px;
    font-weight: bolder;
    background-color: rgba(85,133,249, 0.2);
    &:hover {
      background-color: rgba(85,133,249, 0.3);
      color: #4A73D5;
    }
  }
  .coinOuter {
    background-color: #fff;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    font-size: 12px;
    justify-content: space-between;
    border-radius: 10px;
  }
  .coin {
    padding: 20px;
    background-color: rgba(239,241,245,1);
    width: 60px;
    border-radius: 50%;
    img {
      height:20px;
      width: 20px;
    }
  }
  .coinInner {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;
    p {
      margin-top: 5px;
      color: #4a4a4a;
      font-weight: 700;
    }
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
