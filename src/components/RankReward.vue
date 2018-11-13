<template>
  <div>
    <img style="margin-left:10%;margin-top:-40%;" alt="" width="80%" srcset=""/>
      <div class="sellplane">
        <div>
          <div v-for="(rank, index) in ranks" :key="index">
            <div class="selltextleft" :style="{'top': gettop(index)}">
              <img alt="" width="30px" :srcset="rank.logourl"/>
              {{rank.name}}({{rank.cointype}})
            </div>
            <div class="selltextright" :style="{'top': gettop(index)}">{{rank.value}}</div>
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
    </div>
  </div>
</template>

<script>
const allranks = require("../assets/rank.json");
export default {
  name: 'rankreward',
  data () {
    return {
      ranks: allranks,
    }
  },
  methods:{
    gettop: function(index){
      return (222 + index*28)+"px";
    }
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
