<template>
  <div>
    <!-- <img alt="" width="100%" style="padding-top: 0px" srcset="../../static/pic/头部条框.png"/>
    <img alt="" width="100%" style="padding-top: 0px;padding-bottom:0px" srcset="../../static/pic/条框1.png"/>
    <img alt="" width="100%" style="" srcset="../../static/pic/条框2.png"/>
    <img alt="" width="100%" style="" srcset="../../static/pic/底部条框.png"/> -->
    <img style="margin-left:10%;margin-top:-40%;" alt="" width="80%" srcset=""/>
      <!-- <div class="sellplane"> -->
      <div>
        <div>
          <div v-for="(rank, index) in ranks" :key="index">
            <div class="columns is-mobile" style="text-align: center; height: 100px">
              <div class="column">
                <div v-show="index == 0"><img alt="" width="20%" srcset="../../static/pic/金牌.png"/></div>
                <div v-show="index == 1"><img alt="" width="20%" srcset="../../static/pic/银牌.png"/></div>
                <div v-show="index == 2"><img alt="" width="20%" srcset="../../static/pic/铜牌.png"/></div>
              </div>
              <div class="column"><img alt="" width="30px" :srcset="rank.logourl"/></div>
              <div class="column">{{rank.name}}({{rank.cointype}})</div>
              <div class="column">{{rank.value}}</div>
            </div>
            <!-- <div class="selltextright" :style="{'top': gettop(index)}">{{rank.value}}</div> -->
          </div>
          <!-- <img src="../../static/pic/43市值排行.png" class="sellpic" alt="" /> -->
        </div>
      </div>
    <div>
{{$t('rankreward_rule')}}</br>
{{$t('rankreward_rule_1')}}</br>
{{$t('rankreward_rule_2')}}</br>
{{$t('rankreward_rule_3')}}</br>
{{$t('rankreward_rule_4')}}</br>
{{$t('rankreward_rule_5')}}</br>
{{$t('rankreward_rule_6')}}</br>
{{$t('rankreward_rule_7')}}</br>
{{$t('rankreward_rule_8')}}</br>
{{$t('rankreward_rule_9')}}</br>
{{$t('rankreward_rule_10')}}</br>
{{$t('rankreward_rule_11')}}</br>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
const allcoins = require("../assets/coins.json");

export default {
  name: 'rankreward',
  data () {
    return {
      ranks: [],
      coins: allcoins,
      maxvalue: 0,
      minvalue: 0
    }
  },
  methods:{

  },
  async mounted(){
    for(const index in this.coins){
      const onecoin = this.coins[index];
      console.log(onecoin);
      const num = index + 1;
      console.log(num);
      const body = (await axios.get(
        `http://www.deaso40.com:8989/api/getmarketvalue/${num}`
      )).data;
      console.log(body);
      this.ranks.push({
        name: onecoin.name,
        cointype: onecoin.cointype,
        logourl: onecoin.logourl,
        value: body.result.marketvalue
      })
    }
    console.log("11");
    this.ranks.sort(
      function(a,b){return b.value-a.value}
    )
  }
}
</script>

<style scoped>
/* sellbuy */
  .sellplane{
      position: relative;/*相对定位*/
      width: 50%;
      margin-left: 25%;
  }
  /*图片部分的设置*/
  .sellpic{
      /*position: static;默认定位,可以省略*/
      margin-top: -70%;
      width: 100%;
      height: 2000px;
  }
  /*文字的设置*/
  .selltextleft{
      position: absolute;/*绝对定位*/
      width: 100%;
      left: 38%;/*离左边0像素*/
      font-size: 18px;
  }
  .selltextright{
      position: absolute;/*绝对定位*/
      width: 100%;
      left: 65%;/*离左边0像素*/
      font-size: 18px;
  }
</style>
