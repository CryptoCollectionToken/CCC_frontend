<template>
  <div>
    <img style="margin-left:30%;" alt="" width="40%" srcset="../../../static/pic/我的纪念币页面主图.png"/>
    <!-- <img style="margin-left:35%;" alt="" width="30%" srcset="../../../static/pic/我的纪念币页面按钮图.png"/> -->
    <div v-for="(coin, index) in coins" :key="index">
      <br/>
      <div style="text-align: center;">{{coin.name}}</div>
      <img style="width: 30%;margin-left: 35%;" :src="coin.url" alt="" />
      <div style="text-align: center;">{{$t('mine_serial_number')}}{{coin.coinnumber}}</div>
      <br/>
      <div style="text-align: center;">{{$t('mine_constant_auction_price')}}</div>
      <br/>
      <div>
        <div class="sellplane">
          <div>
            <div class="selltextleft line1">{{$t('mine_trading_price')}}</div>
            <div class="selltextleft line2">{{$t('mine_trading_fee')}}</div>
            <div class="selltextleft line3">{{$t('mine_net_income')}}</div>
            <div class="selltextleft line4">{{$t('mine_auction_cycle')}}</div>
            <div class="selltextright line1">
              <input class="input is-small" v-model="const_input" style="width:90px" type="text" placeholder="">EOS
            </div>
            <div class="selltextright line2">{{const_fee}}</div>
            <div class="selltextright line3">{{const_income}}</div>
            <div class="selltextright line4">
              <span class="control">
                <div class="select is-small">
                  <select v-model="const_time">
                    <option selected>2</option>
                     <option v-for="(const_time, index) in const_times" :key="index">{{const_time}}</option>
                  </select>
                </div>
              </span>{{$t('mine_time')}}
            </div>
            <img src="../../../static/pic/我的纪念币面和纪念币交易页面拍卖显示框.png" class="sellpic" alt="" />
          </div>
        </div>
        <br/>
        <div class="div1">
          <a @click="const_sell(coin)">
            <span class="span1">{{$t('mine_sell_now')}}</span>
            <img src="../../../static/pic/我的纪念币页面按钮图.png" class="img1" alt="" />
          </a>
        </div>
        <br/>
      </div>
      <div>
        <div class="sellplane">
          <div>
            <div class="selltextleft line1">{{$t('mine_initial_price')}}</div>
            <div class="selltextleft line2">{{$t('mine_end_price')}}</div>
            <div class="selltextleft line3">{{$t('mine_trading_fee')}}</div>
            <div class="selltextleft line4">{{$t('mine_net_income')}}</div>
            <div class="selltextleft line5">{{$t('mine_descent')}}</div>
            <div class="selltextleft line6">{{$t('mine_auction_cycle')}}</div>
            <div class="selltextright line1">
              <input class="input is-small" style="width:90px" type="text" placeholder="" v-model="change_input_start">EOS
            </div>
            <div class="selltextright line2">
              <input class="input is-small" style="width:90px" type="text" placeholder="" v-model="change_input_end">EOS
            </div>
            <div class="selltextright line3">{{change_fee}}</div>
            <div class="selltextright line4">{{change_income}}</div>
            <div class="selltextright line5">{{change_down_perhour}}</div>
            <div class="selltextright line6">
              <span class="control">
                <div class="select is-small">
                  <select v-model="change_time">
                    <option selected>2</option>
                    <option v-for="(change_time, index) in change_times" :key="index">{{change_time}}</option>
                  </select>
                </div>
              </span>{{$t('mine_time')}}
            </div>
            <img src="../../../static/pic/我的纪念币面和纪念币交易页面拍卖显示框.png" class="sellpic6l" alt="" />
          </div>
        </div>
        <br/>
        <div class="div1">
          <a @click="change_sell(coin)">
            <span class="span1">{{$t('mine_sell_now')}}</span>
            <img src="../../../static/pic/我的纪念币页面按钮图.png" class="img1" alt="" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// const allcoins = require("../../assets/existcoinlist.json");
import PriceFormatter from '../../util/eosPriceFormatter';
import { mapActions, mapState } from 'vuex';
import API, { eos } from '@/util/api';

export default {
  name: 'sellcoin',
  data () {
    return {
      coins: [],
      //constant sell values
      const_input: 0,
      const_fee: "0.0000 EOS",
      const_income: "0.0000 EOS",
      const_time: 2,
      //changing sell values
      change_input_start: 0,
      change_input_end: 0,
      change_fee: "0.0000 EOS",
      change_income: "0.0000 EOS",
      change_down_perhour: "0.0000 EOS",
      change_time: 2,
      
      const_times:[4,6,8,10,12,14,16,18,20,22,24],
      change_times:[4,6,8,10,12,14,16,18,20,22,24],
    }
  },
  created: function () {
    const allcoins = this.existcoins;
    for(const coinid in allcoins){
      const coin = allcoins[coinid];
      if(this.$route.params.coinnumber === coin.coinnumber){
          this.coins.push(coin);
        }
    }
  },
  methods:{
    const_sell(coin){
      API.SellCoinAsync(this.const_input * 9825, coin.contracttype + " " + 1);
    },
    change_sell(){
      API.SellCoinAsync(this.const_input * 9825, coin.contracttype + " " + 1);
    },
    const_input_changed(){
      // console.log(this.const_input*0.0175);
      this.const_fee = PriceFormatter.formatPrice(this.const_input * 175);
      this.const_income = PriceFormatter.formatPrice(this.const_input * 9650);
    },
    change_input_changed(){
      this.change_fee = PriceFormatter.formatPrice(this.change_input_start * 175)+"~"+PriceFormatter.formatPrice(this.change_input_end * 175);
      this.change_income = PriceFormatter.formatPrice(this.change_input_start * 9650)+"~"+PriceFormatter.formatPrice(this.change_input_end * 9650);
      this.change_down_perhour = PriceFormatter.formatPrice((this.change_input_end-this.change_input_start)/this.change_time*10000);
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
    ...mapState(['existcoins']),
  },
}
</script>

<style scoped>
  /* button */
  .div1{
      position: relative;/*相对定位*/
      width: 20%;
      margin-left: 40%;
  }
  .div2{
      position: relative;/*相对定位*/
      width: 12%;
      margin-left: 44%;
  }
  /*图片部分的设置*/
  .img1{
      /*position: static;默认定位,可以省略*/
      width: 100%;
      height: 60px;
  }
  /*文字的设置*/
  .span1{
      position: absolute;/*绝对定位*/
      width: 100%;
      bottom: 21px;/*离底下0像素*/
      left: 0px;/*离左边0像素*/
      text-align: center;
      font-size: 18px;
  }

  /* sellbuy */
  .sellplane{
      position: relative;/*相对定位*/
      width: 50%;
      margin-left: 25%;
  }
  /*图片部分的设置*/
  .sellpic{
      /*position: static;默认定位,可以省略*/
      width: 100%;
      height: 160px;
  }
  /*文字的设置*/
  .selltextleft{
      position: absolute;/*绝对定位*/
      width: 100%;
      left: 15%;/*离左边0像素*/
      font-size: 18px;
      text-decoration:underline;
  }
  .selltextright{
      position: absolute;/*绝对定位*/
      width: 100%;
      left: 50%;/*离左边0像素*/
      font-size: 18px;
      text-decoration:underline;
  }
  .line1{
      top: 24px;/*离底下0像素*/
  }
  .line2{
      top: 52px;/*离底下0像素*/
  }
  .line3{
      top: 80px;/*离底下0像素*/
  }
  .line4{
      top: 108px;/*离底下0像素*/
  }

  .sellpic6l{
      /*position: static;默认定位,可以省略*/
      width: 100%;
      height: 216px;
  }
  .line5{
      top: 136px;/*离底下0像素*/
  }
  .line6{
      top: 164px;/*离底下0像素*/
  }
</style>
