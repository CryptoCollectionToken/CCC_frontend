<template>
  <div>
    <Header></Header>
    <div class="transactionPage">
      <div class="btnContainer">
        <router-link to="alltype" class="myBtn">{{$t('transaction_found')}}</router-link>
      </div>
      <div class="coinOuter">
        <router-link class="coinItem" v-for="(coin,key) in coins" :key="key" :to="`selecttype${coin.cointype}`">
          <div class="coinInner">
            <div class="coin"><img :srcset="coin.logourl"/></div>
            <p>{{$t(coin.cointype)}}</p>
          </div>
        </router-link>
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
      this.$router.push({path: `/selecttype/${type}`});
    },
    toalltype: function (e) {
      // console.log(e.toElement.innerText);
      this.$router.push({path: `/alltype`});
    }
  }
}
</script>

<style lang="scss" scoped>
  .transactionPage {
    background-color:rgba(239,241,245,1);
    padding: 20px;
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
</style>
