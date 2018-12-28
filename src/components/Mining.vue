<template>
  <div>
    <img style="margin-left:30%;" alt="" width="40%" srcset="../../static/pic/挖矿页面.png"/>
    <section class="section2">
      <div style="padding-left:30%">{{$t('mining_canmine_before')}}{{remainamount}}{{$t('mining_canmine_after')}}</div>
      <div style="padding-left:30%">{{$t('mining_cost_before')}}{{needeos}}EOS{{$t('mining_cost_after')}}</div>
      </br>
      <div style="text-align:center;">
        {{$t('refer_link')}} <input class="input is-small" style="width:80%" type="text" placeholder="" v-model="input">
      </div>
      </br>
      <a @click="mining(1)"><img class="minebutton" alt="" srcset="../../static/pic/挖矿页面按钮图1.png"/></a>
      <a @click="mining(2)"><img class="minebutton" alt="" srcset="../../static/pic/挖矿页面按钮图2.png"/></a>
      <a @click="mining(5)"><img class="minebutton" alt="" srcset="../../static/pic/挖矿页面按钮图3.png"/></a>
      <a @click="mining(10)"><img class="minebutton" alt="" srcset="../../static/pic/挖矿页面按钮图4.png"/></a>
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
      const need = this.needeos * times * 10000;
      console.log(need);
      if (this.input == ''){
        await API.transferEOSAsync({
          to: 'chainbankeos',
          memo: 'mining',
          amount: need,
        });
      }else{
        await API.transferEOSAsync({
          to: 'chainbankeos',
          memo: 'mining ref ' + this.input,
          amount: need,
        });
      }
    }
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
