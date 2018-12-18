<template>
  <div>
    <img style="margin-left:30%;" alt="" width="40%" srcset="../../static/pic/挖矿页面.png"/>
    <section class="section2">
      <div style="padding-left:30%">{{$t('mining_canmine_before')}}{{remainamount}}{{$t('mining_canmine_after')}}</div>
      <div style="padding-left:30%">{{$t('mining_cost_before')}}{{needeos}}EOS{{$t('mining_cost_after')}}</div>
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
      needeos: 1.000,
      mininglist: [
        [429600,1.0000],
        [408120,1.1000],
        [386640,1.2100],
        [365160,1.3310],
        [343680,1.4640],
        [322200,1.6110],
        [279240,1.7720],
        [257760,1.9490],
        [236280,2.1440],
        [214800,2.3580],
        [193320,2.5940],
        [171840,2.8530],
        [150360,3.1380],
        [128880,3.4520],
        [107400,3.7970],
        [85920,4.1770],
        [64440,4.5950],
        [42960,5.0540],
        [21480,5.5600],
        [0,6.1160]],
    }
  },
  methods: {
    mining: async function (times) {
      // console.log(e.toElement.innerText);
      const need = this.needeos * times * 10000;
      console.log(need);
      await API.transferEOSAsync({
        to: 'ceshiyongeos',
        memo: 'mining',
        amount: need,
      });
    }
  },
  async mounted(){
    this.remainamount = await API.getRemainAmountAsync({ accountName: 'ceshiyongeos' });
    for(const index in this.mininglist){
      if(this.mininglist[index][0] <= this.remainamount){
        this.needeos = this.mininglist[index][1];
        break;
      }else{
        this.needeos = this.mininglist[index][1];
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
