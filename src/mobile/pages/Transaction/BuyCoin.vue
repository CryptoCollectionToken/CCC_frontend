<template>
  <div>
    <Header></Header>
    <div class="buyCoinPage">
      <div v-for="(coin, index) in coins" :key="index">
        <div style="width: 100%;">
          <img v-if="coin.type == 1" :src="coin.url" alt="" />
          <img v-if="coin.type == 2" :src="coin.url" alt="" />
        </div>
        <div style="padding: 20px;">
          <div class="headline">
            编号：{{coin.coinnumber}}
          </div>
          <div>
            <table>
              <tr>
                <td>
                  <div class="coinItem">
                    <p>{{$t('transaction_price')}}</p>
                    <p>{{coin.sellvalue}} EOS</p>
                  </div>
                </td>
                <td>
                  <div class="coinItem">
                    <p class="orangeColor">{{$t('transaction_fee')}}</p>
                    <p>{{coin.sellgas}}</p>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="coinItem">
                    <p class="orangeColor">{{$t('transaction_total')}}</p>
                    <p>{{coin.sellallvalue}}</p>
                  </div>
                </td>
                <td>
                  <div class="coinItem">
                    <p>{{$t('transaction_reward')}}</p>
                    <p>{{coin.selltoken}} Token</p>
                  </div>
                </td>
              </tr>
            </table>
          </div>
        </div>
        <a @click="Buy(coin)" class="buyBtn">
          {{$t('transaction_buy_now')}}
        </a>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
// const allcoins = require("../../assets/transactions.json");
import { mapState } from 'vuex';
import API from '@/util/api';
import Header from '@/mobile/components/layout/Header';
import Footer from '@/mobile/components/layout/Footer';

export default {
  name: 'buycoin',
  components: {
    Header,
    Footer
  },
  data () {
    return {
      coins: [],
    }
  },
  created: function () {
    const allcoins = this.transactions;
    for (const coinid in allcoins) {
      const coin = allcoins[coinid];
      if (this.$route.params.sellid == coin.sellid) {
        this.coins.push(coin);
      }
    }
  },
  methods: {
    async Buy(coin) {
      try {
        await API.transferEOSAsync({
          from: this.scatterAccount,
          to: 'chainbankeos',
          memo: 'take_order' + ' ' + coin.sellid,
          amount: coin.sellallvalue * 10000,
        });
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
    }
  },
  computed: {
    ...mapState(['transactions', 'scatterAccount']),
  },
}
</script>

<style lang="scss" scoped>
  .buyBtn {
    width: 100%;
    text-align: center;
    display: block;
    padding: 10px 0;
    color: #fff;
    background-color: #5585F9;
    &:hover {
      background-color: #ccc;
    }
  }
  .buyCoinPage {
    background-color:rgba(239,241,245,1);
  }
  .headline {
    background-color: rgba(85,133,249, 0.1);
    text-align: center;
    font-size: 14px;
    padding: 10px 0;
    font-weight: bolder;
    color: #5585F9;
  }
  table {
    width: 100%;
    background-color: #fff;
  }
  table tr td {
    text-align: center;
  }
  .coinItem {
    text-align: center;
    padding: 20px;
    p:first-child {
      font-weight: bolder;
      color: #5585F9;
      font-size: 16px;
      margin-bottom: 5px;
    }
    p:last-child {
      font-size: 14px;
    }
  }
  .orangeColor {
    color: #FF6B1A!important;
  }
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
  .showing_picture{
    width: 80%;
    margin-left: 10%;
  }
  .showing_picture_coin{
    width: 40%;
    margin-left: 30%;
  }
</style>
