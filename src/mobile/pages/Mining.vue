<template>
  <div class="reward-page">
    <Header></Header>
    <div class="mining-top-back1">
      <div class="mining-top-back2">
        <div align="center">
          <img class="mining-top-front" src="http://www.deaso40.com/jmjnb/mobileui/挖矿/挖矿矢量图2.png" alt="">
        </div>
      </div>
    </div>
    <div class="mining-remain">
      <div class="mining-remain-text">
        {{$t('mining_canmine_before')}}
        <span class="mining-remain-text-blue">{{remainamount}}</span>
        {{$t('mining_canmine_after')}}
      </div>
      <div class="mining-remain-text">
        {{$t('mining_cost_before')}}
        <span class="mining-remain-text-blue">{{needeos}}</span>
        EOS{{$t('mining_cost_after')}}
      </div>
      <div class="mining-remain-text">
        <span style="vertical-align: middle;"> {{$t('refer_link')}} </span> <input class="input is-small" style="width:50%" type="text" placeholder="" v-model="input">
      </div>
    </div>
    <!-- <img src="http://www.deaso40.com/jmjnb/mobileui/挖矿/挖矿页GIF图用这张，不用UI效果的那张.gif" alt=""/> -->
    <div v-if ="mined || showcoins.length != 0" class="get_back">
      <br/>
      <div v-if="mined">
        <div style="text-align: center;">({{totalTime}})</div>
      </div>
      <div v-if="showcoins.length != 0">
        <div style="text-align: center;font-size: 30px;font-weight: bold;">{{$t('mining_get')}}</div>
        <br/>
        <div class="columns is-multiline is-mobile">
          <div class="column is-one-third" v-for="(cointype,key) in showcoins" key="index">
            <div class="showing_picture" v-if="cointype.type == 1">
              <img :src="cointype.url" alt="" />
            </div>
            <div class="showing_picture_coin" v-if="cointype.type == 2">
              <img :src="cointype.url" alt="" />
            </div>
            <div style="text-align: center; font-weight: bold;">{{cointype.value}}{{$t('value')}}{{$t(cointype.cointype)}}<span v-if="cointype.type == 2">{{$t('coin')}}</span></div>
          </div>
        </div>
      </div>
      <br/>
    </div>
    <div class="buttonContainer">
      <a class="button is-link" @click="mining(1)">{{$t('mining_1time')}}</a>
      <a class="button is-success" @click="mining(2)">{{$t('mining_2time')}}</a>
      <a class="button is-dark" @click="mining(5)">{{$t('mining_5time')}}</a>
      <a class="button is-warning" @click="mining(10)">{{$t('mining_10time')}}</a>
    </div>
    <!--<div class="home-page-inner">
      <div class="columns is-mobile">
        <div class="column">
          <div class="button is-link mining-button" @click="mining(1)">{{$t('mining_1time')}}</div>
        </div>
        </br>
        <div class="column">
          <div class="button is-success mining-button" @click="mining(2)">{{$t('mining_2time')}}</div>
        </div>
        </br>
        <div class="column">
          <div class="button is-dark mining-button" @click="mining(5)">{{$t('mining_5time')}}</div>
        </div>
        </br>
        <div class="column">
          <div class="button is-warning mining-button" @click="mining(10)">{{$t('mining_10time')}}</div>
        </div>
      </div>
    </div>-->
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { mapActions, mapState } from 'vuex';
import API, { eos } from '@/util/api';
export default {
  components: {
    Header,
    Footer
  },
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
      beforecoins: [],
      newcoins: [],
      totalTime: 15,
      mined: false,
      showcoins: [],
    }
  },
  methods: {
    ...mapActions(['getCoins']),
    aftermining: async function (inputtime) {
      if (this.mined){
        this.totalTime = inputtime;
        return;  //改动的是这两行代码
      }
      this.totalTime = inputtime;
      this.mined = true
      let clock = window.setInterval(async () => {
        this.totalTime--
        if (this.totalTime < 0) {
          window.clearInterval(clock)
          this.totalTime = inputtime
          this.mined = false  //这里重新开启
          await this.getCoins();
          this.newcoins = [];
          this.showcoins = [];
          console.log(this.existcoins);
          console.log(this.beforecoins);
          if(this.existcoins.length != this.beforecoins.length){
            for(let i = this.beforecoins.length;i<this.existcoins.length;i++){
              this.newcoins.push(this.existcoins[i]);
            }
          }
          console.log(this.newcoins);
          for(const coinid in this.newcoins){
            const coin = this.newcoins[coinid];
            if(this.scatterAccount.name == coin.owner){
              this.showcoins.push(coin);
            }
          }
          console.log(this.showcoins);
          // this.beforecoins = this.existcoins;
        }
      },1000)
    },
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
        // console.log(this.beforecoins);
        // console.log(this.existcoins);
        if(times >= 10) this.aftermining(15);
        else this.aftermining(15);
      } catch (error) {
        // console.error(error);
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
    ...mapState(['existcoins', 'scatterAccount'])
  },
  async mounted(){
    this.beforecoins = this.existcoins;
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

<style lang="scss" scoped>
  .buttonContainer {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    background-color: #fff;
    a {
      margin-right: 10px;
      margin-bottom: 10px;
    }
  }
  $baseColor: #5585F9;
  .intro-outer {
    padding: 10px 20px;
    .intro-title {
      padding-left: 10px;
      border-left: 2px solid $baseColor;
      color: $baseColor;
      font-weight: bolder;
    }
  }
  .home-page-inner {
    margin-top: 10px;
  }
  .reward-page {
    background-color:rgba(239,241,245,1);
  }
  .login-card{
    background-color:rgba(255,255,255,255);
    padding: 10px;
  }
  .mining-top{
    &-back1{
      background-image:url('http://www.deaso40.com/jmjnb/mobileui/挖矿/挖矿页背景图.png');
      background-size: 100% 100%;
      background-repeat:no-repeat;
    }
    &-back2{
      background-image:url('http://www.deaso40.com/jmjnb/mobileui/挖矿/挖矿矢量图1.png');
      background-size: 80%;
      background-repeat:no-repeat;
      background-position-x: 50%;
      background-position-y: 50%;
    }
    &-front{
      padding-top: 15%;
      width: 20%;
    }
  }
  .mining-remain{
    font-size: 14px;
    padding-top: 10px;
    padding-bottom: 10px;
    background-color: #FFFFFF;
    text-align: center;
    &-text{
      padding: 5px;
      &-blue{
        color: $baseColor;
      }
    }
  }
  .mining-button{
    width: 100%;
    height: 110%;
    padding-bottom: 10%;
  }
  .showing_picture{
    width: 100%;
  }
  .showing_picture_coin{
    width: 48%;
    margin-left: 26%;
  }
  .get_back{
    background-image:url("http://www.deaso40.com/jmjnb/staticpic/首页和挖矿页.png");
    background-repeat:no-repeat;
    // background-attachment:fixed;
    background-size: 100% 100%;
    text-shadow:1px 1px 1px #000;
    color:#fff;
  }
</style>
