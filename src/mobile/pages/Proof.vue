<template>
  <div>
    <Header></Header>
    <div>
      <div style="text-align: center"><img src="../assets/tokenImg.png" alt=""></div>
      <div class="tokenContainer">
        <div class="tokenItem">
          <div class="tokenTop">
            <span class="blueColor">{{$t('proof_my')}}</span>
            <span class="orangeColor">{{myCCC}} CCC</span>
          </div>
          <div class="tokenBottom">
            <span class="blueColor">{{$t('proof_amount')}}</span>
            <span class="orangeColor">{{30000000 - allCCC}} CCC</span>
          </div>
        </div>
        <div class="tokenItem">
          <div class="tokenTop">
            <span class="blueColor">{{$t('Smart contract account balance')}}</span>
            <span class="orangeColor">{{this.alleos}} EOS</span>
          </div>
          <div class="tokenBottom">
            <span class="blueColor">{{$t('proof_reward_for_all')}}</span>
            <span class="orangeColor">{{this.alleos - collectionamount - buybackamount}} EOS</span>
          </div>
        </div>
        <div class="tokenItem">
          <div class="tokenTop">
            <span class="blueColor">{{$t('proof_hold')}}</span>
            <span class="orangeColor">{{allCCC}} CCC</span>
          </div>
          <div class="tokenBottom">
            <span class="blueColor">{{$t('proof_reward_for_holder')}}</span>
            <span class="orangeColor">{{myclaim}} EOS</span>
          </div>
        </div>
        <div class="tokenItem">
          <div class="tokenTop">
            <span class="blueColor">{{$t('proof_whole_edition_pool')}}</span>
            <span class="orangeColor">{{collectionamount}} EOS</span>
          </div>
          <div class="tokenBottom">
            <span class="blueColor">{{$t('proof_repurchase')}}</span>
            <span class="orangeColor">{{buybackamount}} EOS</span>
          </div>
        </div>
        <div class="tokenItem">
          <div class="tokenTop">
            <span class="blueColor">{{$t('proof_need')}}</span>
            <span class="orangeColor">{{allbuyback}} CCC</span>
          </div>
          <div class="tokenBottom">
            <span class="blueColor">{{$t('proof_price')}}</span>
            <span class="orangeColor">{{buybackamount/allbuyback}} EOS/CCC</span>
          </div>
        </div>
        <div class="tokenItem">
          <div style="text-align:center;">
            <!-- <span style="display: inline-block;vertical-align: middle;"></span> -->
            <input class="input is-small" style="width:30%" type="text" :placeholder="$t('proof_sell_amount')" v-model="amount">
            <div>
              <a @click="buyback(amount)" class="button" style="margin-left:5px;margin-top:15px">{{$t('proof_sell_token')}}</a>
            </div>
          </div>
        </div>
        <div class="tokenItem" style="color: #5585F9;">
          <p>{{$t('Total issue amount')}}</p>
          <p>{{$t('Total circulation')}}</p>
        </div>
      </div>
    </div>
    <Footer></Footer>
    <!--<div class="back">
      <br/>
      <div style="text-align:center;">
        <div class="button" style="margin-left:5px;">{{$t('proof_my')}} {{myCCC}}</div>
        &lt;!&ndash; <div class="button" style="margin-left:5px;">{{$t('proof_accumulation')}} 675.27 EOS</div> &ndash;&gt;
      </div>
      <div class="titletext">{{$t('proof_amount')}} {{30000000 - allCCC}}</div>
      <div class="titletext">{{$t('proof_income')}} {{this.alleos}}</div>
      <div class="titletext">{{$t('proof_reward_for_all')}} {{this.alleos - collectionamount - buybackamount}}</div>
      <div class="titletext">{{$t('proof_hold')}} {{allCCC}}</div>
      <div class="titletext">{{$t('proof_reward_for_holder')}} {{shareamount}}</div>
      &lt;!&ndash; <div class="titletext">{{$t('proof_whole_edition_players')}} 741.7426 EOS</div> &ndash;&gt;
      <div class="titletext">{{$t('proof_whole_edition_pool')}} {{collectionamount}}EOS</div>
      <div class="titletext">{{$t('proof_repurchase')}} {{buybackamount}}</div>
      <div class="titletext">{{$t('proof_need')}} {{allbuyback}}</div>
      <div class="titletext">{{$t('proof_price')}} {{buybackamount/allbuyback}}/{{$t('proof')}}</div>
      <div style="text-align:center;">
        &lt;!&ndash; <div class="column class="columns"">
        </div>
        <div class="column"> &ndash;&gt;
        {{$t('proof_sell_amount')}}
        <input class="input is-small" style="width:90px" type="text" placeholder="" v-model="amount">
        <div>
          <br/>
          <a @click="buyback(amount)" class="button" style="margin-left:5px">{{$t('proof_sell_token')}}</a>
        </div>
      </div>
      &lt;!&ndash; <div class="column">
        {{$t('proof_transfer_reward')}}
        <input class="input is-small" style="width:90px" type="text" placeholder="输入数量">
        <div>
          <a class="button" style="margin-left:5px">{{$t('proof_transfer_token')}}</a>
        </div>
      </div>
      <div class="column">
      </div> &ndash;&gt;
      &lt;!&ndash; </div> &ndash;&gt;
      {{$t('proof_introduction')}}<br/>
      {{$t('proof_introduction_1')}}<br/>
      {{$t('proof_introduction_2')}}<br/>
      {{$t('proof_introduction_3')}}<br/>
      {{$t('proof_introduction_4')}}<br/>
      {{$t('proof_introduction_5')}}<br/>
    </div>-->
  </div>
</template>

<script>
import API, { eos } from '@/util/api';
import { mapActions, mapState } from 'vuex';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

export default {
  name: 'proof',
  components: {
    Header,
    Footer
  },
  data () {
    return {
      amount: "",
      allCCC: 0,
      myCCC: 0,
      shareamount: 0,
      buybackamount: 0,
      collectionamount: 0,
      allbuyback: 0,
      alleos: 0,
      myclaim: 0,
    }
  },
  created: async function(){
    // = parseFloat(transaction.bid.substring(0,6));
    try{
      this.myCCC = parseFloat((await API.getMyCCCAsync(this.scatterAccount)).balance.substring(0,6));
    }catch(e){
      this.myCCC = 0;
    }
    this.allCCC = parseFloat((await API.getCCCAsync()).supply.substring(0,6));
    var myinfo = 0;
    try{
      myinfo = parseFloat((await API.getMyInfoAsync(this.scatterAccount)).payout.substring(0,6));
    }catch(e){
      myinfo = 0;
    }
    const pool = await API.getPoolAsync();
    // this.shareamount =
    console.log((await API.getEOSAsync()).balance);
    this.alleos = (await API.getEOSAsync()).balance.substring(0,6);
    // console.log((parseInt(pool.earnings_per_share.substr(2).match(/.{1,2}/g).reverse().join(''), 16)/4294967296) * this.allCCC);
    this.shareamount = ((parseInt(pool.earnings_per_share.substr(2).match(/.{1,2}/g).reverse().join(''), 16)/4294967296) || 0);
    this.myclaim = (this.shareamount * this.myCCC) - myinfo;
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
  .tokenContainer {
    padding: 10px;
    background-color: rgba(239,241,245,1);
  }
  .blueColor {
    color: #5585F9;
    max-width: 60%;
  }
  .orangeColor {
    color: #F5A623;
  }
  .tokenItem {
    background: #fff;
    padding: 15px;
    border-radius: 10px;
    font-size: 14px;
    font-weight: bolder;
    margin-bottom: 20px;
  }
  .tokenTop {
    border-bottom: 1px solid #ccc;
    padding-bottom: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .tokenBottom {
    padding-top: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
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
