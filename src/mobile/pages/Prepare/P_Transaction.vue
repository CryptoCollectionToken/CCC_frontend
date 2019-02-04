<template>
  <div class="reward-page">
    <Header></Header>
    <div class="home-page-inner">
      <div class="transaction-top">
        <div class="transaction-top-text">
          {{$t('prepare_exchange')}}
        </div>
      </div>
      <div class="transaction-card">
        {{$t('prepare_exchange_1')}}</br>
      </div>
      <div class="transaction-card">
        {{$t('prepare_exchange_2')}}</br>
      </div>
      <div class="transaction-card">
        {{$t('prepare_exchange_3')}}</br>
      </div>
      <div class="transaction-card">
        {{$t('prepare_exchange_4')}}</br>
      </div>
      <div class="transaction-card">
        {{$t('prepare_exchange_5')}}</br>
      </div>
      <div class="transaction-card">
        {{$t('prepare_exchange_6')}}</br> 
      </div>
      <div class="transaction-card">
        {{$t('prepare_exchange_7')}}</br>
      </div>
      <div class="transaction-card">
        {{$t('prepare_exchange_8')}}</br>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
export default {
  components: {
    Header,
    Footer
  },
  name: 'prepare',
  data () {
    return {
      mininglist:[
        ["408,120",1.100],
        ["386,640",1.210],
        ["365,160",1.331],
        ["343,680",1.464],
        ["322,200",1.611],
        ["300,720",1.772],
        ["279,240",1.949],
        ["257,760",2.144],
        ["236,280",2.358],
        ["214,800",2.594],
        ["193,320",2.853],
        ["171,840",3.138],
        ["150,360",3.452],
        ["128,880",3.797],
        ["107,400",4.177],
        [" 85,920",4.595],
        [" 64,440",5.054],
        [" 42,960",5.560],
        [" 21,480",6.116]],
      miningcoinlist:[	  
        [1,"BTC","2,100","0.49%"],
        [1,"ETH","10,000","2.32%"],
        [1,"LTC","8,400","1.95%"],
        [1,"BNB","19,000","4.42%"],
        [1,"RIC","50,000","11.64%"],
        [1,"OMG","14,000","3.26%"],
        [1,"AE","27,000","6.28%"],
        [1,"NEO","10,000","2.33%"],
        [1,"USDT","30,000","6.98%"],
        [1,"PTR","10,000","2.33%"],
        [1,"XMR","1,620","0.38%"],
        [1,"QTUM","10,000","2.33%"],
        [5,"BTM","28,000","6.52%"],
        [5,"HT","10,000","2.33%"],
        [5,"EOS","20,000","4.66%"],
        [10,"IOTA","27,000","6.28%"],
        [10,"ZB","21,000","4.89%"],
        [50,"XLM","37,400","8.70%"],
        [100,"ADA","31,100","7.24%"],
        [500 ,"DOGE","23,180","5.40%"],
        [500,"RIPPLE","20,000","4.65%"],
        [500,"TRX","19,800","4.61%"]],
    }
  }
}
</script>

<style lang="scss" scoped>
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
    margin-bottom: 10px
  }
  .reward-page {
    background-color:rgba(255,255,255,255);
  }
  .transaction-card{
    font-size: 15px;
    background-color:rgba(255,255,255,255);
    padding: 10px;
    color: #6F6F6F
  }
  .transaction-top{
    background-image: url('http://www.deaso40.com/jmjnb/mobileui/怎么玩/怎么玩纪念币 交易/010e225c3aefa9a8012090db0bd382.png@1280w_1l_2o_100sh.png');
    background-size: contain;
    background-repeat:no-repeat;
    background-position-x: 50%;
    background-position-y: 50%;
    &-text{
      padding-left: 55%;
      padding-top: 24%;
      padding-bottom: 24%;
      font-size: 15px;
      font-weight: bolder;
      // width: 80%;
      color: #FFDFA9;
    }
  }
</style>
