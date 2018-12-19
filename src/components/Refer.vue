<template>
  <div>
    <table border="1" style="width:60%;margin-left:20%;text-align:center;">
      <tr><td>{{$t('refer_collectors')}}</td><td>{{$t('refer_collectors')}}</td></tr>
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
      {{$t('refer_link')}} <input class="input is-small" style="width:80%" type="text" placeholder="">
    </div>
    <br/>
    <table border="1" style="width:80%;margin-left:10%;text-align:center;">
      <tr><td>{{$t('refer_invitee')}}</td><td>{{$t('refer_rebate')}}</td></tr>
      <tr><td>KKKXXXXX4321</td><td>30{{$t('refer_token')}}</td></tr>
    </table>
    <br/>{{$t('refer_note')}}
    <br/>{{$t('refer_note_1')}}
  </div>
</template>

<script>
export default {
  name: 'refer',
  data () {
    return {

    }
  }
}
</script>

<style scoped>
td{
    text-align:center;
}
</style>
