<template>
  <div>
    <img style="margin-left:30%;" alt="" width="40%" srcset="../../../static/pic/我的纪念币页面主图.png"/>
    <!-- <img style="margin-left:35%;" alt="" width="30%" srcset="../../../static/pic/我的纪念币页面按钮图.png"/> -->
    <div class="div1" v-for="(cointype, index) in cointypes" :key="index">
      <a @click="gotoCoinPage(type, cointype.type, cointype.value)">
        <span class="span1">{{cointype.name}}</span>
        <img src="../../../static/pic/我的纪念币页面按钮图.png" class="img1" alt="" />
      </a>
    </div>
  </div>
</template>

<script>
const allcointypes = require("../../assets/cointypes.json");

export default {
  name: 'airdrop',
  data () {
    return {
      cointypes: [],
      type: ""
    }
  },
  created: function () {
    this.cointypes = allcointypes[this.$route.params.type].types;
    this.type = this.$route.params.type;
  },
  methods:{
    gotoCoinPage(type, cointype, value){
      this.$router.push({ path: `/mycoin/${type}/${cointype}/${value}`});
    }
  }
}
</script>

<style scoped>
/*div1下面 包含着1个图片和1段文字*/
  .div1{
      position: relative;/*相对定位*/
      width: 30%;
      /* height: 140px; */
      margin-left: 35%;
  }
  /*图片部分的设置*/
  .img1{
      /*position: static;默认定位,可以省略*/
      width: 100%;
      /* height: 100%; */
      height: 40px;
  }
  /*文字的设置*/
  .span1{
      position: absolute;/*绝对定位*/
      width: 100%;
      bottom: 11px;/*离底下0像素*/
      left: 0px;/*离左边0像素*/
      text-align: center;
      font-size: 18px;
  }
</style>
