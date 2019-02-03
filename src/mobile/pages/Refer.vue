<template>
  <div class="reward-page">
    <Header></Header>
    <div class="refer-top-back1">
      <div class="refer-top-card">
          <div class="refer-top-front">
            <div class="refer-top-front-title">{{$t('refer_collectors')}}{{$t('refer_reward')}}</div>
          </div>
      </div>
      <div class="refer-top-card">
        <div class="refer-top-back2">
          <div class="refer-top-front">
            <span class="refer-top-front-left">{{$t('refer_users_before')}}1-10{{$t('refer_users_after')}}</span>
            <span class="refer-top-front-right">{{$t('refer_reward_for_each_user_before')}}30{{$t('refer_reward_for_each_user_after')}}</span>
          </div>
        </div>
      </div>
      <div class="refer-top-card">
        <div class="refer-top-back2">
          <div class="refer-top-front">
            <span class="refer-top-front-left">{{$t('refer_users_before')}}11-30{{$t('refer_users_after')}}</span>
            <span class="refer-top-front-right">{{$t('refer_reward_for_each_user_before')}}40{{$t('refer_reward_for_each_user_after')}}</span>
          </div>
        </div>
      </div>
      <div class="refer-top-card">
        <div class="refer-top-back2">
          <div class="refer-top-front">
            <span class="refer-top-front-left">{{$t('refer_users_before')}}31-70{{$t('refer_users_after')}}</span>
            <span class="refer-top-front-right">{{$t('refer_reward_for_each_user_before')}}50{{$t('refer_reward_for_each_user_after')}}</span>
          </div>
        </div>
      </div>
      <div class="refer-top-card">
        <div class="refer-top-back2">
          <div class="refer-top-front">
            <span class="refer-top-front-left">{{$t('refer_users_before')}}71-100{{$t('refer_users_after')}}</span>
            <span class="refer-top-front-right">{{$t('refer_reward_for_each_user_before')}}60{{$t('refer_reward_for_each_user_after')}}</span>
          </div>
        </div>
      </div>
      <div class="refer-top-card">
        <div class="refer-top-back2">
          <div class="refer-top-front">
            <span class="refer-top-front-left">{{$t('refer_users_before')}}>101{{$t('refer_users_after')}}</span>
            <span class="refer-top-front-right">{{$t('refer_reward_for_each_user_before')}}80{{$t('refer_reward_for_each_user_after')}}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="refer-body">
      {{$t('refer_link')}} 
      <input class="input is-small" style="width:60%;margin-left:10%;" type="text" :placeholder="myname" disabled>
    </div>
    <div class="refer-bottom">
      <br/>{{$t('refer_note')}}
      <br/>{{$t('refer_note_1')}}
      <br/>{{$t('refer_note_2')}}
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import API, { eos } from '@/util/api';

export default {
  components: {
    Header,
    Footer
  },
  name: 'refer',
  data () {
    return {
      coins: [],
      myname: ''
    }
  },
  created: async function () {
    this.myname = API.getmyself();
    const allcoins = await API.getPlayersAsync({accountName: 'chainbankeos'});
    for(const coinid in allcoins){
      const coin = allcoins[coinid];
      if(coin.playername == API.getmyself()){
          this.coins = coin.refs;
        }
    }
  },
  methods:{
    getreward (input) {
      const amount = input + 1;
      if(amount >= 1 && amount <= 10){
        return 30;
      }else if(amount >= 11 && amount <= 30){
        return 40;
      }else if(amount >= 31 && amount <= 70){
        return 50;
      }else if(amount >= 71 && amount <= 100){
        return 60;
      }else if(amount >= 101){
        return 80;
      }
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
  .reward-page {
    background-color:rgba(239,241,245,1);
  }
  .refer-top{
    &-back1{
      padding-top: 10px;
      background-image:url('http://www.deaso40.com/jmjnb/mobileui/推荐计划/通证页GIF背景图.gif');
      background-size: 100% 100%;
      background-repeat:no-repeat;
      padding-bottom: 20px;
    }
    &-card{
      padding: 10px;
    }
    &-back2{
      background-image: url('http://www.deaso40.com/jmjnb/mobileui/推荐计划/矩形.png');
      background-size: 100% 100%;
      background-repeat:no-repeat;
      background-position-x: 50%;
      background-position-y: 50%;
    }
    &-front{
      text-align: center;
      padding: 16px;
      &-title{
        font-size: 18px;
        font-weight: bold;
        color: #ffffff;
        text-shadow:1px 1px 1px #000;
      }
      &-left{
        padding-right: 10%;
        font-weight:bold;
        color: #ffffff;
        text-shadow:1px 1px 1px #000;
      }
      &-right{
        padding-left: 10%;
        font-weight:bold;
        color: #F4A622;
        text-shadow:1px 1px 1px #000;
      }
    }
  }
  .refer-body{
    margin-top: 10px;
    background-image:url('http://www.deaso40.com/jmjnb/mobileui/推荐计划/分组 2.png');
    background-size: 100% 100%;
    background-repeat:no-repeat;
    padding: 30px;
    font-weight:bold;
    color: #ffffff;
    text-shadow:1px 1px 1px #000;
  }
  .refer-bottom{
    padding: 30px;
  }
</style>
