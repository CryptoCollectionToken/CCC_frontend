<template>
  <div>
    <img style="margin-left:40%;" alt="" width="20%" srcset="../../../static/pic/纪念币交易页面拍卖主图.png"/>
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
            <div class="selltextleft line1">购买价格</div>
            <div class="selltextleft line2">交易费用</div>
            <div class="selltextleft line3">支付总额</div>
            <div class="selltextleft line4">通证奖励</div>
            <div class="selltextright line1">2.0000 EOS</div>
            <div class="selltextright line2">1.0000 EOS</div>
            <div class="selltextright line3">3.0000 EOS</div>
            <div class="selltextright line4">4.2    TOKEN</div>
            <img src="../../../static/pic/我的纪念币面和纪念币交易页面拍卖显示框.png" class="sellpic" alt="" />
          </div>
        </div>
        <br/>
        <div class="div1">
          <a @click="gotoCoinPage(item)">
            <span class="span1">立即购买</span>
            <img src="../../../static/pic/我的纪念币页面按钮图.png" class="img1" alt="" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const allcoins = require("../../assets/transactions.json");
export default {
  name: 'airdrop',
  data () {
    return {
      coins: [],
    }
  },
  created: function () {
    console.log(allcoins);
    for(const coinid in allcoins){
      const coin = allcoins[coinid];
      console.log(coin);
      if(this.$route.params.sellid === coin.sellid){
          this.coins.push(coin);
        }
    }
    console.log(this.coins);
  },
  methods:{
    Sell(){

    }
  }
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
