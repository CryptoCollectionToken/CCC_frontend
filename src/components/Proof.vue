<template>
  <div class="back">
    <br/>
    <div style="text-align:center;">
      <div class="button" style="margin-left:5px;">{{$t('proof_my')}} {{myCCC}}</div>
      <!-- <div class="button" style="margin-left:5px;">{{$t('proof_accumulation')}} 675.27 EOS</div> -->
    </div>
    <div class="titletext">{{$t('proof_amount')}} 30000000 CCC</div>
    <div class="titletext">{{$t('proof_income')}} {{shareamount*allCCC+buybackamount+collectionamount}}</div>
    <!-- <div class="titletext">{{$t('proof_reward_for_all')}} 4450.4556 EOS</div> -->
    <div class="titletext">{{$t('proof_hold')}} {{allCCC}}</div>
    <div class="titletext">{{$t('proof_reward_for_holder')}} {{shareamount}}/{{$t('proof')}}</div>
    <!-- <div class="titletext">{{$t('proof_whole_edition_players')}} 741.7426 EOS</div> -->
    <div class="titletext">{{$t('proof_whole_edition_pool')}} {{collectionamount}}EOS</div>
    <div class="titletext">{{$t('proof_repurchase')}} {{buybackamount}}</div>
    <div class="titletext">{{$t('proof_need')}} {{allbuyback}}</div>
    <div class="titletext">{{$t('proof_price')}} {{buybackamount/allbuyback}}/{{$t('proof')}}</div>
    <div style="text-align:center;">
      <!-- <div class="column class="columns"">
      </div>
      <div class="column"> -->
        {{$t('proof_sell_amount')}}
        <input class="input is-small" style="width:90px" type="text" placeholder="" v-model="amount">
        <div>
          <br/>
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
      allCCC: 0,
      myCCC: 0,
      shareamount: 0,
      buybackamount: 0,
      collectionamount: 0,
      allbuyback: 0
    }
  },
  created: async function(){
    // = parseFloat(transaction.bid.substring(0,6));
    this.myCCC = parseFloat((await API.getMyCCCAsync()).balance.substring(0,6));
    this.allCCC = parseFloat((await API.getCCCAsync()).supply.substring(0,6));
    const pool = await API.getPoolAsync();
    this.shareamount = (parseInt((pool.earnings_per_share.substr(2).match(/.{1,2}/g).reverse().join(''), 16)/4294967296)/this.allCCC || 0);
    this.buybackamount = pool.earnings_for_buyback / 10000; 
    this.collectionamount = pool.earnings_for_collection / 10000;
    const buybacks = await API.getBuyBackAsync();
    var allbuyback = 0;
    console.log(buybacks);
    for(const buyback in buybacks){
      allbuyback += parseFloat(buybacks[buyback].limit.substring(0,6));
    }
    this.allbuyback = allbuyback;
  },
  methods:{
    buyback: async function(amount){
      await API.BuyBackAsync(amount * 10000);
    },
  },
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
.back{
  background-image:url("http://www.deaso40.com/jmjnb/修改图/通证页.gif");
  background-repeat:no-repeat;
  background-attachment:fixed;
  background-size: 100%;
  text-shadow:1px 1px 1px #000;
  color:#fff;
}
</style>
