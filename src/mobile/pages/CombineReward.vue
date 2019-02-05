<template>
  <div>
    <div class="combineRewardPage">
      <div v-if="page == 1">
        <div class="giftBox">
          <img class="giftImg" srcset="/static/pic/组合奖励主图.png"/>
        </div>
        <div class="info">
          <h1>{{$t('combinereward_edition')}}</h1>
          <p>{{$t('combinereward_edition_1_before')}}{{collectionamount}}EOS{{$t('combinereward_edition_1_after')}}
            {{$t('combinereward_edition_2')}}<br>
            {{$t('combinereward_edition_3_before')}}{{getters}}{{$t('combinereward_edition_3_after')}}<br>
            {{$t('combinereward_edition_4')}}<br></p>
        </div>
        <div class="myBtn">
          <a @click="getreward(28)" class="button is-link getRewardBtn">{{$t('conbinereward_take')}}</a>
        </div>
      </div>
      <div v-if="page == 2">
        <div class="page2Box">
          <h1>{{$t('combinereward_thematic')}}</h1>
          <div class="page2Item" v-for="(special, index) in specials" :key="index">
            <p>{{$t(special)}}</p>
            <div class="page2Coin">
              <div class="coinLogo" v-for="(cointype, index2) in special_types[index]" :key="index2">
                <img :srcset="coins[cointype].logourl"/>
              </div>
            </div>
            <div class="page2Btn">
              <a @click="getreward(22 + index)" class="button is-link">{{$t('conbinereward_take')}}</a>
            </div>
          </div>
        </div>
      </div>
      <div v-if="page == 3">
        <div class="page3Box">
          <div>
            <h1>{{$t('combinereward_single')}}</h1>
          </div>
          <div class="coinContainer">
            <div class="page3Item" v-for="(coin, index) in coins" :key="index">
              <div>
                <div class="page3coinLogo">
                  <img alt="" width="10%" :srcset="coin.logourl"/>
                </div>
              </div>
              <p class="coinInfo">{{$t(coin.cointype)}}：{{coin_rewards[index]}}{{$t('proof')}}</p>
              <div>
                <a @click="getreward(index)" class="button is-link">{{$t('conbinereward_take')}}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="rule">
        <h1>{{$t('combinereward_rule')}}</h1>
        <p>{{$t('combinereward_rule_1')}}</p>
        <p>{{$t('combinereward_rule_2')}}</p>
        <p>{{$t('combinereward_rule_3')}}</p>
        <p>{{$t('combinereward_rule_4')}}</p>
        <p>{{$t('combinereward_rule_5')}}</p>
      </div>
      <div>
        <nav class="pagination is-centered" role="navigation" aria-label="pagination">
          <ul class="pagination-list">
            <li><a class="pagination-previous" @click="gotopage(page - 1)"><</a></li>
            <li><a class="pagination-link" :class="thispage(1)" @click="gotopage(1)">1</a></li>
            <li><a class="pagination-link" :class="thispage(2)" @click="gotopage(2)">2</a></li>
            <li><a class="pagination-link" :class="thispage(3)" @click="gotopage(3)">3</a></li>
            <li><a class="pagination-next" @click="gotopage(page + 1)">></a></li>
          </ul>
        </nav>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
const allcoins = require("@/assets/coins.json");
import API, { eos } from '@/util/api';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

export default {
  name: 'combinereward',
  components: {
    Header,
    Footer
  },
  data () {
    return {
      page: 1,
      specials: ['combinereward_thematic_1','combinereward_thematic_2','combinereward_thematic_3','combinereward_thematic_4','combinereward_thematic_5','combinereward_thematic_6'],
      special_types: [[0,2,10],[1,14,7,11,12,6,15,18,21],[3,13,16],[17,5,20],[9,8],[19,4]],
      spacial_rewards: [20000, 14000, 12000, 4500, 4000, 2500],
      coin_rewards: [10000, 2200, 2500, 10000, 2000, 1500, 1000, 1800, 3000, 1800, 10000, 1800, 1500, 1800, 2800, 1400, 1200, 1000, 1000, 1000, 1000, 1000],
      coins: allcoins,
      collectionamount: 0,
      getters: 0,
      Account: '',
    }
  },
  async created() {
    this.page = this.$route.params.page;
    const pool = await API.getPoolAsync();
    this.collectionamount = pool.earnings_for_collection / 10000;
    const getters = await API.getCollectionAsync();
    this.getters = getters.length;
    this.Account = this.scatterAccount;
    // alert(this.Account.name);
  },
  methods: {
    gotopage(page) {
      if (page <= 0) {
        page = 1;
      } else if (page >= 4) {
        page = 3;
      }
      this.$router.push({path: `/m/combinereward/${page}`});
    },
    thispage(page) {
      if (this.page == page) return "is-current";
    },
    async getreward(index) {
      try {
        await API.CollClaimAsync(index, this.Account);
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
    ...mapState(['scatterAccount']),
  },
}
</script>

<style lang="scss" scoped>
  .page3Item {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    min-height: 120px;
    margin-bottom: 10px;
  }
  .coinInfo {
    font-size: 12px;
  }
  .coinContainer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    flex-direction: row;
  }
  .page3coinLogo {
    background-color: #E0E0E0;
    width: 50px;
    height: auto;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    img {
      width: 100%;
    }
  }
  .page3Box {
    font-size: 12px;
    .titleBox {
      text-align: center;
    }
    h1 {
      font-size: 18px;
      font-weight: bolder;
      margin-bottom: 20px;
    }
  }
  * {
    font-size: 14px;
  }
  .page2Box {
    text-align: center;
    h1 {
      font-size: 18px;
      font-weight: bolder;
      margin-bottom: 20px;
    }
    .page2Item {
      margin: 20px 0;
    }
    .page2Coin {
      margin: 20px 0;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
    }
  }
  .rewardBtn {

  }
  .coinLogo {
    background-color: #E0E0E0;
    padding: 5px;
    margin-right: 20px;
    width: 13%;
    max-width: 100px;
    border-radius: 50%;
  }
  .myBtn {
    text-align: center;
    margin: 40px 0;
  }
  .getRewardBtn {
    padding: 0 25%;
    background-color: #5586F9;
    font-size: 16px;
  }
  .info {
    margin-top: 40px;
    h1 {
      font-size: 18px;
      font-weight: bolder;
      border-bottom: 1px solid #ccc;
    }
  }
  .rule{
    h1 {
      font-size: 18px;
      font-weight: bolder;
      margin-bottom: 20px;
    }
    p {
      margin-bottom: 20px;
    }
  }
  .giftBox {
    text-align: center;
  }
  .giftImg {
    width: 50%;
    border: 1px solid #ccc;
    padding: 20px 30px;
    border-radius: 5%;
  }
  .combineRewardPage {
    padding: 20px;
  }

  /* button */
  .div1{
      position: relative;/*相对定位*/
      width: 12%;
      margin-left: 44%;
  }
  /*图片部分的设置*/
  .img1{
      /*position: static;默认定位,可以省略*/
      width: 100%;
      height: 40px;
  }
    /*文字的设置*/
  .span1{
      position: absolute;/*绝对定位*/
      width: 100%;
      bottom: 11px;/*离底下0像素*/
      left: 0px;/*离左边0像素*/
      text-align: center;
      font-size: 18px;
  }
  .gotoShop {
    background-image: linear-gradient(-180deg,rgb(116, 114, 103),rgb(37, 37, 59));
    background-size: cover;
    height: 48px;
    width: 20%;
    margin-left: 40%;
    background-color: transparent;
    border-color: transparent;
    color: white;
    border-radius: 24px;
  }
  .titletext{
    text-align:center;
    font-weight:bold;
    font-size:30px;
  }
</style>
