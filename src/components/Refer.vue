<template>
  <div>
    <br/>
    <table border="1" style="width:60%;margin-left:20%;text-align:center;">
      <tr><td>{{$t('refer_collectors')}}</td><td>{{$t('refer_reward')}}</td></tr>
      <tr>
        <td>{{$t('refer_users_before')}}1-10{{$t('refer_users_after')}}</td>
        <td>{{$t('refer_reward_for_each_user_before')}}30{{$t('refer_reward_for_each_user_after')}}</td>
      </tr>
      <tr>
        <td>{{$t('refer_users_before')}}11-30{{$t('refer_users_after')}}</td>
        <td>{{$t('refer_reward_for_each_user_before')}}40{{$t('refer_reward_for_each_user_after')}}</td>
      </tr>
      <tr>
        <td>{{$t('refer_users_before')}}31-70{{$t('refer_users_after')}}</td>
        <td>{{$t('refer_reward_for_each_user_before')}}50{{$t('refer_reward_for_each_user_after')}}</td>
      </tr>
      <tr>
        <td>{{$t('refer_users_before')}}71-100{{$t('refer_users_after')}}</td>
        <td>{{$t('refer_reward_for_each_user_before')}}60{{$t('refer_reward_for_each_user_after')}}</td>
      </tr>
      <tr>
        <td>{{$t('refer_users_before')}}>101{{$t('refer_users_after')}}</td>
        <td>{{$t('refer_reward_for_each_user_before')}}80{{$t('refer_reward_for_each_user_after')}}</td>
      </tr>
    </table>
    <br/>
    <br/>
    <div style="text-align:center;">
      {{$t('refer_link')}} <input class="input is-small" style="width:80%" type="text" :placeholder="myname" disabled>
    </div>
    <br/>
    <table border="1" v-for="(coin,key) in coins" key="index" style="width:80%;margin-left:10%;text-align:center;">
      <tr><td>{{$t('refer_invitee')}}</td><td>{{$t('refer_rebate')}}</td></tr>
      <tr><td>{{coin}}</td><td>{{getreward(key)}}{{$t('refer_reward_for_each_user_after')}}</td></tr>
    </table>
    <br/>{{$t('refer_note')}}
    <br/>{{$t('refer_note_1')}}
  </div>
</template>

<script>
import API, { eos } from '@/util/api';

export default {
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

<style scoped>
td{
    text-align:center;
}
</style>
