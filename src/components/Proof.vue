<template>
  <div>
    <div style="text-align:center;">
      <div class="button" style="margin-left:5px;">{{$t('proof_my')}} 12781</div>
      <div class="button" style="margin-left:5px;">{{$t('proof_accumulation')}} 675.27 EOS</div>
    </div>
    <div class="titletext">{{$t('proof_amount')}} 21315726</div>
    <div class="titletext">{{$t('proof_income')}} 7417.426 EOS</div>
    <div class="titletext">{{$t('proof_reward_for_all')}} 4450.4556 EOS</div>
    <div class="titletext">{{$t('proof_hold')}} 8684274</div>
    <div class="titletext">{{$t('proof_reward_for_holder')}} 0.0005 EOS/通证</div>
    <div class="titletext">{{$t('proof_whole_edition_players')}} 741.7426 EOS</div>
    <div class="titletext">{{$t('proof_whole_edition_pool')}} 8428.2462 EOS</div>
    <div class="titletext">{{$t('proof_repurchase')}} 2225.2278 EOS</div>
    <div class="titletext">{{$t('proof_need')}} 179251 EOS</div>
    <div class="titletext">{{$t('proof_price')}} 0.0124 EOS/通证</div>
    <div style="text-align:center;">
      <!-- <div class="column class="columns"">
      </div>
      <div class="column"> -->
        {{$t('proof_sell_amount')}}
        <input class="input is-small" style="width:90px" type="text" placeholder="" v-model="amount">
        <div>
          <a @click="buyback(amount)" class="button" style="margin-left:5px">{{$t('proof_sell_token')}}</a>
        </div>
      </div>
      <!-- <div class="column">
        {{$t('proof_transfer_reward')}}
        <input class="input is-small" style="width:90px" type="text" placeholder="输入数量">
        <div>
          <a class="button" style="margin-left:5px">{{$t('proof_transfer_token')}}</a>
        </div>
      </div>
      <div class="column">
      </div> -->
    <!-- </div> -->
    {{$t('proof_introduction')}}<br/>
    {{$t('proof_introduction_1')}}<br/>
    {{$t('proof_introduction_2')}}<br/>
    {{$t('proof_introduction_3')}}<br/>
    {{$t('proof_introduction_4')}}<br/>
    {{$t('proof_introduction_5')}}<br/>
  </div>
</template>

<script>
import API, { eos } from '@/util/api';

export default {
  name: 'proof',
  data () {
    return {
      amount: 0,
    }
  },
  methods:{
    buyback: async function(amount){
      await API.BuyBackAsync(amount);
    },
  }
}
</script>

<style scoped>
.titletext{
  text-align:center;
  font-weight:bold;
  margin-top:10px;
  margin-bottom:10px;
  font-size:24px
}
</style>
