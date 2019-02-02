<template>
  <div class="reward-page">
    <Header></Header>
    <div class="home-page-inner">
      <div class="login-card">

      </div>
    </div>
    <div class="home-page-inner">
      <div class="login-card">
        <img src="http://www.deaso40.com/jmjnb/mobileui/我的纪念币/我 的收藏币/收 藏.png" alt="" style="width: 100%;">
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
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
  .reward-page {
    background-color:rgba(239,241,245,1);
  }
  .login-card{
    background-color:rgba(255,255,255,255);
  }
</style>
