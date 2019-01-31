<template>
  <div>
    <Header></Header>
    <div>
      <img style="margin-left:40%;padding-top:20px;" alt="" width="20%" srcset="/static/pic/纪念币交易页面拍卖主图.png"/>
      <!-- <div style="padding-left:40%;padding-right:40%;"> -->
      <a @click="enter(cointype)" v-for="(cointype, key) in cointypes" :key="key">
        <span style="padding:5px;">
          <div class="showing_picture" v-if="cointype.type == 1">
            <img :src="cointype.coinurl" alt="" />
          </div>
          <div class="showing_picture_coin" v-if="cointype.type == 2">
            <img :src="cointype.coinurl" alt="" />
          </div>
          <!-- <div><img alt="" width="100%" :src="cointype.coinurl"/></div> -->
          <div style="text-align:center">{{cointype.value}}{{$t('value')}}{{$t(cointype.cointype)}}<span v-if="cointype.type == 2">{{$t('coin')}}</span></div>
        </span>
      </a>
      <!-- </div> -->
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
// const alltransactions = require("../assets/transactions.json");
const allcointypes = require("@/assets/cointypes.json");
import Header from '@/mobile/components/layout/Header';
import Footer from '@/mobile/components/layout/Footer';

export default {
  name: 'selecttype',
  components: {
    Header,
    Footer
  },
  data () {
    return {
      cointypes: []
    }
  },
  created: function () {
    const coin = allcointypes[this.$route.params.type];
    for (const typeid in coin.types) {
      const type = coin.types[typeid];
      console.log(type);
      this.cointypes.push(type);
    }
    console.log(this.cointypes);
  },
  methods: {
    enter: function (sellid) {
      this.$router.push({path: `/transactionlist/${sellid.cointype}/${sellid.type}/${sellid.value}`});
    }
  }
}
</script>

<style scoped>
.showing_picture{
  width: 80%;
  margin-left: 10%;
}
.showing_picture_coin{
  width: 40%;
  margin-left: 30%;
}
</style>
