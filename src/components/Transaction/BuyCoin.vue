<template>
  <div>
    <img style="margin-left:40%;padding-top:20px;" alt="" width="20%" srcset="../../../static/pic/纪念币交易页面拍卖主图.png"/>
    <!-- <img style="margin-left:35%;" alt="" width="30%" srcset="../../../static/pic/我的纪念币页面按钮图.png"/> -->
    <div v-for="(coin, index) in coins" :key="index">
      <br/>
      <!-- <div style="text-align: center;">{{coin.name}}</div> -->
      <img style="width: 30%;margin-left: 35%;" :src="coin.url" alt="" />
      <!-- <div style="text-align: center;">编号：{{coin.coinnumber}}</div> -->
      <br/>
      <div>
        <div class="sellplane">
          <div>
            <div class="selltextleft line1">{{$t('transaction_price')}}</div>
            <div class="selltextleft line2">{{$t('transaction_fee')}}</div>
            <div class="selltextleft line3">{{$t('transaction_total')}}</div>
            <div class="selltextleft line4">{{$t('transaction_reward')}}</div>
            <div class="selltextright line1">{{coin.sellvalue}} EOS</div>
            <div class="selltextright line2">{{coin.sellgas}}</div>
            <div class="selltextright line3">{{coin.sellallvalue}}</div>
            <div class="selltextright line4">{{coin.selltoken}} TOKEN</div>
            <img src="../../../static/pic/我的纪念币面和纪念币交易页面拍卖显示框.png" class="sellpic" alt="" />
          </div>
        </div>
        <br/>
        <div class="div1">
          <a @click="Buy(coin)">
            <span class="span1">{{$t('transaction_buy_now')}}</span>
            <img src="../../../static/pic/我的纪念币页面按钮图.png" class="img1" alt="" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// const allcoins = require("../../assets/transactions.json");
import { mapActions, mapState } from 'vuex';
import API, { eos } from '@/util/api';

export default {
  name: 'buycoin',
  data () {
    return {
      coins: [],
    }
  },
  created: function () {
    const allcoins = this.transactions;
    for(const coinid in allcoins){
      const coin = allcoins[coinid];
      if(this.$route.params.sellid == coin.sellid){
          this.coins.push(coin);
        }
    }
  },
  methods:{
    async Buy(coin){
      await API.transferEOSAsync({
        to: 'chainbankeos',
        memo: 'take_order' + ' ' + coin.sellid,
        amount: coin.sellallvalue,
      });
    }
  },
  computed: {
    ...mapState(['transactions']),
  },
}
</script>

<style scoped>
  /* button */
  .div1{
      position: relative;/*相对定位*/
      width: 20%;
      margin-left: 40%;
  }
  .div2{
      position: relative;/*相对定位*/
      width: 12%;
      margin-left: 44%;
  }
  /*图片部分的设置*/
  .img1{
      /*position: static;默认定位,可以省略*/
      width: 100%;
      height: 60px;
  }
  /*文字的设置*/
  .span1{
      position: absolute;/*绝对定位*/
      width: 100%;
      bottom: 21px;/*离底下0像素*/
      left: 0px;/*离左边0像素*/
      text-align: center;
      font-size: 18px;
  }

  /* sellbuy */
  .sellplane{
      position: relative;/*相对定位*/
      width: 50%;
      margin-left: 25%;
  }
  /*图片部分的设置*/
  .sellpic{
      /*position: static;默认定位,可以省略*/
      width: 100%;
      height: 160px;
  }
  /*文字的设置*/
  .selltextleft{
      position: absolute;/*绝对定位*/
      width: 100%;
      left: 15%;/*离左边0像素*/
      font-size: 18px;
      text-decoration:underline;
  }
  .selltextright{
      position: absolute;/*绝对定位*/
      width: 100%;
      left: 50%;/*离左边0像素*/
      font-size: 18px;
      text-decoration:underline;
  }
  .line1{
      top: 24px;/*离底下0像素*/
  }
  .line2{
      top: 52px;/*离底下0像素*/
  }
  .line3{
      top: 80px;/*离底下0像素*/
  }
  .line4{
      top: 108px;/*离底下0像素*/
  }

  .sellpic6l{
      /*position: static;默认定位,可以省略*/
      width: 100%;
      height: 216px;
  }
  .line5{
      top: 136px;/*离底下0像素*/
  }
  .line6{
      top: 164px;/*离底下0像素*/
  }
</style>
