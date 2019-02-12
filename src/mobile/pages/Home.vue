<template>
  <div class="home-page">
    <Header></Header>
    <div class="home-page-inner">
      <div>
        <div><img src="http://www.deaso40.com/jmjnb/修改图/主页图.png" alt="" style="width: 100%;"></div>
        <div style="padding: 10px;">
          <table>
            <tr>
              <td>
                <router-link class="nav-box" :to="'/m/' + pages[10]">
                  <span>{{$t(routes[10])}}</span>
                  <img src="../assets/recommend.png" alt="">
                </router-link>
              </td>
              <td class="lastCol">
                <div class="nav-box" @click="rewardModal = true">
                  <span>{{$t('reward')}}</span>
                  <img src="../assets/reward.png" alt="">
                </div>
              </td>
            </tr>
            <tr class="lastrow">
              <td>
                <router-link class="nav-box" :to="'/m/' + pages[9]">
                  <span>{{$t(routes[9])}}</span>
                  <img src="../assets/token.png" alt="">
                </router-link>
              </td>
              <td class="lastCol">
                <div class="nav-box" @click="introductionModal = true">
                  <span>{{$t('introduction')}}</span>
                  <img src="../assets/introduction.png" alt="">
                </div>
              </td>
            </tr>
          </table>
        </div>
        <div style="padding: 10px;">
          <div style="background-color: #fff;">
            <div class="intro-outer">
              <span class="intro-title">{{$t('homepage_overview')}}</span>
            </div>
            <div class="title-pic">
              {{$t('homepage_introduction')}}
            </div>
          </div>
        </div>
        <div style="padding: 10px;">
          <div class="back">
            <img class="title_picture_coin" src="http://www.deaso40.com/jmjnb/纪念币图png/硬币比特币1.png" alt="" /><br/>
            <img class="title_picture" src="http://www.deaso40.com/jmjnb/纪念币图png/中本聪纸币1.png" alt="" /><br/>
            <img class="title_picture" src="http://www.deaso40.com/jmjnb/纪念币图png/阿姨币20.png" alt="" /><br/>
            <img class="title_picture" src="http://www.deaso40.com/jmjnb/纪念币图png/韭菜币5.png" alt="" /><br/>
            <img class="title_picture" src="http://www.deaso40.com/jmjnb/纪念币图png/门罗币2.png" alt="" /><br/>
            <br/>
          </div>
        </div>
      </div>
    </div>
    <b-modal :active.sync="introductionModal" has-modal-card>
      <form action="">
        <div class="modal-card" style="width: auto">
          <section class="modal-card-body">
            <b-field :label="$t('introduction')">
              <b-select :placeholder="$t('introduction')" v-model="introductionval">
                <option v-for="(coin, index) in coins" :value="coin.cointype" :key="index">
                  {{$t(coin.cointype)}}
                </option>
              </b-select>
            </b-field>
          </section>
        </div>
      </form>
    </b-modal>
    <b-modal :active.sync="rewardModal" has-modal-card>
      <form action="">
        <div class="modal-card" style="width: auto">
          <section class="modal-card-body">
            <b-field :label="$t('reward')">
              <b-select :placeholder="$t('reward')" v-model="rewardval">
                <option v-for="(reward,index) in rewards" :key="index" :value="rewardpage[index]">
                  {{$t(reward)}}
                </option>
              </b-select>
            </b-field>
          </section>
        </div>
      </form>
    </b-modal>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
const allcoins = require("@/assets/coins.json");

export default {
  components: {
    Header,
    Footer
  },
  data () {
    return {
      pages: ["HomePage", "Prepare", "Introduction", "Mining", "Mine", "Transaction", "RankReward", "CombineReward", "GloryReward", "Proof", "Refer"],
      // routes: ["首页","怎么玩","纪念币介绍","挖矿","我的纪念币","纪念币交易","市值排行奖励","组合奖励","衔级奖励","通证","推荐计划"],
      routes: ["homepage", "prepare", "introduction", "mining", "mine", "transaction", "rankreward", "combinereward", "gloryreward", "proof", "refer"],
      // rewards: ["市值排行奖励","组合奖励","衔级奖励"],
      rewards: ["rankreward", "combinereward", "gloryreward"],
      introductionval: '',
      rewardval: this.$t('reward'),
      rewardpage: ["rankreward", "combinereward/1", "gloryreward/1"],
      coins: allcoins,
      language: "zh",
      introductionModal: false,
      rewardModal: false
    }
  },
  name: 'Home',
  watch: {
    introductionval(val) {
      if (val === this.$t("introduction")) return;
      this.$router.push({path: `/m/introduction/${val}`});
    },
    rewardval(val) {
      if (val === this.$t("reward")) return;
      this.$router.push({path: `/m/${val}`});
    },
  }
}
</script>

<style lang="scss" scoped>
  $borderColor: #f5f5f5;
  $baseColor: #5585F9;
  * {
    font-size: 14px;
  }
  .intro-outer {
    padding: 10px 20px;
    .intro-title {
      padding-left: 10px;
      border-left: 2px solid $baseColor;
      color: $baseColor;
      font-weight: bolder;
    }
  }
  .title-pic {
    background-image:url("http://www.deaso40.com/jmjnb/background/backgrounds/new/tenor(1).gif");
    padding: 20px 20px 50px;
    background-repeat:no-repeat;
    background-size: 100% 100%;
    text-shadow:1px 1px 1px #000;
    color:#fff;
  }
  table {
    border-collapse: collapse;
    background-color: #fff;
    width: 100%;
    border: 0 solid $borderColor;
  }
  table td {
    border-top: 0;
    border-right: 1px solid $borderColor;
    border-bottom: 1px solid $borderColor;
    border-left: 0;
    height: 60px;
    &:hover {
      background-color: #f5f5f5;
    }
  }
  table tr.lastrow td {
    border-bottom: 0;
  }

  table tr td.lastCol {
    border-right: 0;
  }
  .nav-box {
    padding: 20px;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    justify-content: space-between;
    color: #4a4a4a;
  }
  .home-page {
    background-color:rgba(239,241,245,1);
  }
  .home-page-inner {
    margin-top: 10px;
  }
  .back {
    background-size: 100%;
    background-image:url("http://www.deaso40.com/jmjnb/background/backgrounds/new/tenor(1).gif");
    background-color: #fff;
  }
  .title_picture{
    width: 80%;
    margin-left: 10%;
  }
  .title_picture_coin{
    width: 40%;
    margin-left: 30%;
  }
</style>
<style>
  body {
    overflow-x: hidden;
  }
</style>
