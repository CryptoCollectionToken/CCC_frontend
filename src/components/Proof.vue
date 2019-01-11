<template>
  <div class="back">
    <br/>
    <div style="text-align:center;">
      <div class="button" style="margin-left:5px;">{{$t('proof_my')}} {{myCCC}}</div>
      <!-- <div class="button" style="margin-left:5px;">{{$t('proof_accumulation')}} 675.27 EOS</div> -->
    </div>
    <div class="titletext">{{$t('proof_amount')}} {{30000000 - allCCC}}</div>
    <div class="titletext">{{$t('proof_income')}} {{this.alleos}}</div>
    <div class="titletext">{{$t('proof_reward_for_all')}} {{this.alleos - collectionamount - buybackamount}}</div>
    <div class="titletext">{{$t('proof_hold')}} {{allCCC}}</div>
    <div class="titletext">{{$t('proof_reward_for_holder')}} {{shareamount}}</div>
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
import { mapActions, mapState } from 'vuex';

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
      allbuyback: 0,
      alleos: 0,
    }
  },
  created: async function(){
    // = parseFloat(transaction.bid.substring(0,6));
    this.myCCC = parseFloat((await API.getMyCCCAsync()).balance.substring(0,6));
    this.allCCC = parseFloat((await API.getCCCAsync()).supply.substring(0,6));
    const pool = await API.getPoolAsync();
    // this.shareamount =  
    console.log((await API.getEOSAsync()).balance);
    this.alleos = (await API.getEOSAsync()).balance.substring(0,6);
    // console.log((parseInt(pool.earnings_per_share.substr(2).match(/.{1,2}/g).reverse().join(''), 16)/4294967296) * this.allCCC);
    this.shareamount = ((parseInt(pool.earnings_per_share.substr(2).match(/.{1,2}/g).reverse().join(''), 16)/4294967296) || 0);
    console.log("shareamount");
    console.log(this.allCCC);
    console.log(this.shareamount + "," + pool.earnings_for_buyback + "," + pool.earnings_for_collection);
    this.buybackamount = pool.earnings_for_buyback / 10000; 
    this.collectionamount = pool.earnings_for_collection / 10000;
    const buybacks = await API.getBuyBackAsync();
    var allbuyback = 0;
    console.log("buybacks");
    console.log(buybacks);
    for(const buyback in buybacks){
      console.log(buybacks[buyback]);
      allbuyback += parseFloat(buybacks[buyback].limit.substring(0,6));
    }
    this.allbuyback = allbuyback;
  },
  methods:{
    buyback: async function(amount){
      try{
        await API.BuyBackAsync(amount * 10000, this.scatterAccount);
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
    },
  },
  computed: {
    ...mapState(['existcoins','scatterAccount']),
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
