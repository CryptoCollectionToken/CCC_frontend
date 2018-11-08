<template>
  <div>
    <img style="margin-left:30%;" alt="" width="40%" srcset="../../../static/pic/我的纪念币页面主图.png"/>
    <!-- <img style="margin-left:35%;" alt="" width="30%" srcset="../../../static/pic/我的纪念币页面按钮图.png"/> -->
    <div v-for="(coin, index) in coins" :key="index">
      <br/>
      <div style="text-align: center;">{{coin.name}}</div>
      <img style="width: 30%;margin-left: 35%;" :src="coin.url" alt="" />
      <div style="text-align: center;">编号：{{coin.coinnumber}}</div>
      <br/>
      <div style="text-align: center;">恒定价格出售</div>
      <br/>
      <div>
        <div class="sellplane">
          <div>
            <div class="selltextleft line1">出售价格</div>
            <div class="selltextleft line2">交易费用</div>
            <div class="selltextleft line3">净收入</div>
            <div class="selltextleft line4">交易周期</div>
            <div class="selltextright line1"><input class="input is-small" style="width:90px" type="text" placeholder="输入数量">EOS</div>
            <div class="selltextright line2">1.0000 EOS</div>
            <div class="selltextright line3">3.0000 EOS</div>
            <div class="selltextright line4">
              <span class="control">
                <div class="select is-small" style="width:86px;">
                  <select>
                    <option selected>选择时间</option>
                    <option>2</option>
                  </select>
                </div>
              </span>小时
            </div>
            <img src="../../../static/pic/我的纪念币面和纪念币交易页面拍卖显示框.png" class="sellpic" alt="" />
          </div>
        </div>
        <br/>
        <div class="div1">
          <a @click="gotoCoinPage(item)">
            <span class="span1">立即出售</span>
            <img src="../../../static/pic/我的纪念币页面按钮图.png" class="img1" alt="" />
          </a>
        </div>
        <br/>
      </div>
      <div>
        <div class="sellplane">
          <div>
            <div class="selltextleft line1">初始价格</div>
            <div class="selltextleft line2">结束价格</div>
            <div class="selltextleft line3">交易费用</div>
            <div class="selltextleft line4">净收入</div>
            <div class="selltextleft line5">小时降价</div>
            <div class="selltextleft line6">拍卖周期</div>
            <div class="selltextright line1"><input class="input is-small" style="width:90px" type="text" placeholder="输入数量">EOS</div>
            <div class="selltextright line2"><input class="input is-small" style="width:90px" type="text" placeholder="输入数量">EOS</div>
            <div class="selltextright line3">1.0000 EOS</div>
            <div class="selltextright line4">3.0000 EOS</div>
            <div class="selltextright line5">2.0000 EOS</div>
            <div class="selltextright line6">
              <span class="control">
                <div class="select is-small" style="width:86px;">
                  <select>
                    <option selected>选择时间</option>
                    <option>2</option>
                  </select>
                </div>
              </span>小时
            </div>
            <img src="../../../static/pic/我的纪念币面和纪念币交易页面拍卖显示框.png" class="sellpic6l" alt="" />
          </div>
        </div>
        <br/>
        <div class="div1">
          <a @click="gotoCoinPage(item)">
            <span class="span1">立即出售</span>
            <img src="../../../static/pic/我的纪念币页面按钮图.png" class="img1" alt="" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const allcoins = require("../../assets/existcoinlist.json");
export default {
  name: 'airdrop',
  data () {
    return {
      coins: [],
    }
  },
  created: function () {
    console.log(allcoins);
    console.log(this.$route.params.type+this.$route.params.cointype+this.$route.params.value);
    for(const coinid in allcoins){
      const coin = allcoins[coinid];
      console.log(coin);
      if(this.$route.params.coinnumber === coin.coinnumber){
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
