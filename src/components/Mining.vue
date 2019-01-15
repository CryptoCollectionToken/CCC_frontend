<template>
  <div>
    <img style="margin-left:30%;" alt="" width="40%" srcset="../../static/pic/挖矿页面.png"/>
    <img alt="" width="100%" srcset="http://www.deaso40.com/jmjnb/修改图/挖矿页.gif"/>
    <section class="section2">
      <div style="text-align: center;margin-left:10%;margin-right:10%;">{{$t('mining_canmine_before')}}{{remainamount}}{{$t('mining_canmine_after')}}</div>
      <div style="text-align: center;margin-left:10%;margin-right:10%;">{{$t('mining_cost_before')}}{{needeos}}EOS{{$t('mining_cost_after')}}</div>
      </br>
      <div style="text-align:center;margin-left:10%;margin-right:10%;">
        {{$t('refer_link')}} <input class="input is-small" style="width:80%" type="text" placeholder="" v-model="input">
      </div>
      </br>
      <div style="text-align: center;">
        <div class="button is-large is-link" @click="mining(1)">{{$t('mining_1time')}}</div>
      </div>
      </br>
      <div style="text-align: center;">
        <div class="button is-large is-success" @click="mining(2)">{{$t('mining_2time')}}</div>
      </div>
      </br>
      <div style="text-align: center;">
        <div class="button is-large is-dark" @click="mining(5)">{{$t('mining_5time')}}</div>
      </div>
      </br>
      <div style="text-align: center;">
        <div class="button is-large is-warning" @click="mining(10)">{{$t('mining_10time')}}</div>
      </div>
      <!-- <div class="div1">
        <a @click="mining(1)">
          <span class="span1">{{$t('mining_1time')}}</span>
          <img src="http://www.deaso40.com/jmjnb/修改图/挖矿空白1.png" class="img1" alt="" />
        </a>
      </div>
      <div class="div1">
        <a @click="mining(2)">
          <span class="span1">{{$t('mining_2time')}}</span>
          <img src="http://www.deaso40.com/jmjnb/修改图/挖矿空白2.png" class="img1" alt="" />
        </a>
      </div>
      <div class="div1">
        <a @click="mining(5)">
          <span class="span1">{{$t('mining_5time')}}</span>
          <img src="http://www.deaso40.com/jmjnb/修改图/挖矿空白3.png" class="img1" alt="" />
        </a>
      </div>
      <div class="div1">
        <a @click="mining(10)">
          <span class="span1">{{$t('mining_10time')}}</span>
          <img src="http://www.deaso40.com/jmjnb/修改图/挖矿空白4.png" class="img1" alt="" />
        </a>
      </div> -->
    </section>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import API, { eos } from '@/util/api';
export default {
  name: 'mining',
  data () {
    return {
      remainamount: 429600,
      needeos: 2.0000,
      mininglist: [
        [429600,2.0000],
        [408120,2.2000],
        [386640,2.4200],
        [365160,2.6620],
        [343680,2.9280],
        [322200,3.2220],
        [279240,3.5440],
        [257760,3.8980],
        [236280,4.2880],
        [214800,4.7160],
        [193320,5.1880],
        [171840,5.7060],
        [150360,6.2760],
        [128880,6.9040],
        [107400,7.5940],
        [85920,8.3540],
        [64440,9.1900],
        [42960,10.1080],
        [21480,11.1200],
        [0,12.2320]],
      input: '',
    }
  },
  methods: {
    mining: async function (times) {
      // console.log(e.toElement.innerText);
      // alert("go mining");
      // alert(this.scatterAccount);
      const need = this.needeos * times * 10000;
      console.log(need);
      try{
        if (this.input == ''){
          await API.transferEOSAsync({
            from: this.scatterAccount,
            to: 'chainbankeos',
            memo: 'mining',
            amount: need,
          });
        }else{
          await API.transferEOSAsync({
            from: this.scatterAccount,
            to: 'chainbankeos',
            memo: 'mining ref ' + this.input,
            amount: need,
          });
        }
        this.$toast.open({
          message: 'Transaction success!',
          type: 'is-success',
          duration: 3000,
          queue: false,
          position: 'is-bottom',
        })
      } catch (error) {
        console.error(error);
        let msg;
        if (error.message === undefined) {
          msg = JSON.parse(error).error.details[0].message;
        } else {
          msg = error.message;
        }
        this.$toast.open({
          message: `Transaction failed: ${msg}`,
          type: 'is-danger',
          duration: 3000,
          queue: false,
          position: 'is-bottom',
        });
      }
    }
  },
  computed: {
    ...mapState(['scatterAccount'])
  },
  async mounted(){
    this.remainamount = await API.getRemainAmountAsync({ accountName: 'chainbankeos' });
    for(const index in this.mininglist){
      if(this.mininglist[index][0] >= this.remainamount){
        this.needeos = this.mininglist[index][1];
      }else{
        break;
      }
    }
    console.log("next:"+this.needeos);
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
    height: 100px;
}
/*文字的设置*/
.span1{
    position: absolute;/*绝对定位*/
    width: 100%;
    bottom: 50px;/*离底下0像素*/
    left: 0px;/*离左边0像素*/
    text-align: center;
    font-size: 28px;
}
.section1 {
  background-image: url("../../static/pic/挖矿页面.png");
  background-size: 100%;
  background-repeat: no-repeat;
  background-color: #fff;
  height: 350px;
  margin-left: 30%;
  margin-right: 30%;
  @media (max-width: 800px) {
    background-size: cover;
  }
}
.section2 {
  background-size: 100%;
  background-repeat: no-repeat;
  background-color: rgb(156, 202, 245);
  padding-top: 100px;
  padding-bottom: 50px;
  @media (max-width: 800px) {
    background-size: cover;
  }
}
.minebutton {
  padding: 0px;
  width:20%;
  margin-left:40%;
}
</style>
