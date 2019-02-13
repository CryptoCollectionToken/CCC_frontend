<template>
  <div>
    <Header></Header>
    <div v-for="(coin, index) in coins" :key="index">
      <div class="exchange-middle">
        <div style="text-align: center;">{{coin.name}}</div>
        <!-- <img style="width: 80%;margin-left: 10%;" :src="coin.url" alt="" /> -->
        <div class="showing_picture" v-if="coin.type == 1">
          <img :src="coin.url" alt="" />
        </div>
        <div class="showing_picture_coin" v-if="coin.type == 2">
          <img :src="coin.url" alt="" />
        </div>
        <div style="text-align: center;">{{$t('mine_serial_number')}}{{coin.coinnumber}}</div>
        <br/>
          <div class="selltextleft line1">{{$t('mine_trading_price')}}</div>
          <div class="selltextcenter line1"><input class="input is-small" v-model="const_input" type="text" placeholder=""></div>
          <div class="selltextright line1">EOS</div>
          <div class="selltextleft line2">{{$t('mine_trading_fee')}}</div>
          <div class="selltextcenter line2">{{const_fee}}</div>
          <div class="selltextright line1">EOS</div>
          <div class="selltextleft line3">{{$t('mine_net_income')}}</div>
          <div class="selltextcenter line3">{{const_income}}</div>
          <div class="selltextright line1">EOS</div>
          <div class="selltextleft line4">{{$t('mine_auction_cycle')}}</div>
          <div class="selltextcenter line4">
            <div class="select is-small">
              <select v-model="const_time">
                <option selected>2</option>
                <option v-for="(const_time, index) in const_times" :key="index">{{const_time}}</option>
              </select>
            </div>
          </div>
          <div class="selltextright line1">{{$t('mine_time')}}</div>
        </span>
        <div class="exchange-middle">
          <a class="button is-fullwidth is-info" @click="const_sell(coin)">
            {{$t('mine_sell_now')}}
          </a>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import PriceFormatter from '../../../util/eosPriceFormatter';
import { mapActions, mapState } from 'vuex';
import API, { eos } from '@/util/api';
const allcointypes = require("../../../assets/cointypes.json");

export default {
  components: {
    Header,
    Footer
  },
  name: 'sellcoin',
  data () {
    return {
      coins: [],
      remainamount: 0,
      lowest_value: 0,
      //constant sell values
      const_input: 0,
      const_fee: "0.0000",
      const_income: "0.0000",
      const_time: 2,
      //changing sell values
      change_input_start: 0,
      change_input_end: 0,
      change_fee: "0.0000",
      change_income: "0.0000",
      change_down_perhour: "0.0000",
      change_time: 2,
      
      const_times:[4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48],
      change_times:[4,6,8,10,12,14,16,18,20,22,24],
    }
  },
  created: async function () {
    this.remainamount = await API.getRemainAmountAsync({ accountName: 'chainbankeos' });
    const allcoins = this.existcoins;
    for(const coinid in allcoins){
      const coin = allcoins[coinid];
      if(this.$route.params.coinnumber === coin.coinnumber){
          this.coins.push(coin);
        }
    }
    this.lowest_value = (2 + (parseInt((429600 - this.remainamount) / 200) * 0.012)) * this.coins[0].value / allcointypes[this.coins[0].cointype].types[0].value;
  },
  methods:{
    async const_sell(coin){
      if(this.const_input < this.lowest_value){
        this.$toast.open({
          message: 'Value Too Low, Lowest:' + this.lowest_value,
          type: 'is-danger',
          duration: 3000,
          queue: false,
          position: 'is-bottom',
        });
        return;
      }
      try{
        await API.SellCoinAsync(this.const_input * 10000, this.const_time + " " + coin.contracttype + " " + 1, this.scatterAccount);
        console.log(this.const_input * 10000);
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
    change_sell(){
      API.SellCoinAsync(this.const_input * 10000, 2 + " " + coin.contracttype + " " + 1, this.scatterAccount);
    },
    const_input_changed(){
      // console.log(this.const_input*0.0175);
      this.const_fee = PriceFormatter.formatPrice(this.const_input * 175).substring(0,6);
      this.const_income = PriceFormatter.formatPrice(this.const_input * 9825).substring(0,6);
    },
    change_input_changed(){
      this.change_fee = PriceFormatter.formatPrice(this.change_input_start * 175)+"~"+PriceFormatter.formatPrice(this.change_input_end * 175).substring(0,6);
      this.change_income = PriceFormatter.formatPrice(this.change_input_start * 9825)+"~"+PriceFormatter.formatPrice(this.change_input_end * 9825).substring(0,6);
      this.change_down_perhour = PriceFormatter.formatPrice((this.change_input_start-this.change_input_end)/this.change_time*10000).substring(0,6);
    }
  },
  watch: { 
    const_input: function(val) {
      this.const_input_changed();
    },
    const_time: function(val) {
      this.const_input_changed();
    },
    change_input_start: function(val) {
      this.change_input_changed();
    },
    change_input_end: function(val) {
      this.change_input_changed();
    },
    change_time: function(val) {
      this.change_input_changed();
    },
  },
  computed: {
    ...mapState(['existcoins','scatterAccount']),
  },
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
  .exchange-middle{
    padding: 10px
  }
  .selltextleft{
    padding-bottom:5px;
    display:inline-block;
    width: 30%;
    padding-left:10%;
    text-align: left;
  }
  .selltextcenter{
    padding-bottom:5px;
    width: 40%;
    padding-left:3%;
    display:inline-block;
    text-align: left;
  }
  .selltextright{
    padding-bottom:5px;
    width: 20%;
    display:inline-block;
    text-align: right;
  }
</style>
