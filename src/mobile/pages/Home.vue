<template>
  <div class="home-page">
    <Header></Header>
    <div class="home-page-inner">
      <div>
        <div><img src="../assets/homeImg.png" alt="" style="width: 100%;"></div>
        <div style="padding: 10px;">
          <table>
            <tr>
              <td>
                <div>
                  <span>推荐计划</span>
                  <img src="../assets/recommend.png" alt="">
                </div>
              </td>
              <td>
                <span>奖励</span>
                <img src="../assets/reward.png" alt="">
              </td>
            </tr>
            <tr>
              <td>
                <span>通证</span>
                <img src="../assets/token.png" alt="">
              </td>
              <td>
                <span>纪念币介绍</span>
                <img src="../assets/introduction.png" alt="">
              </td>
            </tr>
          </table>
        </div>
      </div>
      <section class="section1">
        <nav class="level">
          <!-- Left side -->
          <div class="level-left">
            <div class="level-item">
              <router-link class="navbar-item"
                                :to="{ name: pages[0]}">
                      {{$t(routes[0])}}
              </router-link>
              <router-link
                  class="navbar-item"
                                :to="{ name: pages[1]}">
                      {{$t(routes[1])}}
              </router-link>
              <div class="select is-info" style="margin-top:5px">
                <select v-model="introductionval">
                  <option selected>{{$t('introduction')}}</option>
                  <option v-for="(coin, index) in coins" :value="coin.cointype" :key="index">{{$t(coin.cointype)}}</option>
                </select>
              </div>
            </div>
            <div class="level-item">
              <router-link
                  class="navbar-item"
                                :to="{ name: pages[3]}">
                      {{$t(routes[3])}}
              </router-link>
              <router-link
                  class="navbar-item"
                                :to="{ name: pages[4]}">
                      {{$t(routes[4])}}
              </router-link>
              <router-link
                  class="navbar-item"
                                :to="{ name: pages[5]}">
                      {{$t(routes[5])}}
              </router-link>
            </div>
            <div class="level-item">
              <div class="select is-info" style="margin-top:5px">
                <select v-model="rewardval">
                  <option selected>{{$t('reward')}}</option>
                  <option v-for="(reward,index) in rewards" :key="index" :value="rewardpage[index]">{{$t(reward)}}</option>
                </select>
              </div>
              <router-link
                  class="navbar-item"
                                :to="{ name: pages[9]}">
                      {{$t(routes[9])}}
              </router-link>
              <router-link
                  class="navbar-item"
                                :to="{ name: pages[10]}">
                      {{$t(routes[10])}}
              </router-link>
              <router-link
                  class="navbar-item"
                                :to="{ name: pages[11]}">
                      {{$t(routes[11])}}
              </router-link>
            </div>
          </div>
            <!-- Right side -->
          <div class="level-right">
            <div class="level-item">
              <div class="navbar-item" style="margin-top:5px;">
                <button @click="loginScatterAsync" v-if="!scatterAccount" class="button">{{$t('login')}}</button>
                <div v-if="scatterAccount">{{scatterAccount.name}}</div>
              </div>
              <div class="select" style="margin-top:5px;">
                <select v-model="language" :placeholder="$t('switch_lang')">
                  <option value="en">{{$t('English')}}</option>
                  <option value="zh">{{$t('Chinese')}}</option>
                  <option value="ko">{{$t('Korean')}}</option>
                  <!-- <option value="ja">{{$t('Japanese')}}</option> -->
                </select>
              </div>
            </div>
          </div>
        </nav>
      </section>
    </div>
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
      introductionval: this.$t("introduction"),
      rewardval: this.$t('reward'),
      rewardpage: ["rankreward", "combinereward/1", "gloryreward/1"],
      coins: allcoins,
      language: "zh",
    }
  },
  name: 'Home'
}
</script>

<style lang="scss" scoped>
  table, td, th {
    border: 1px solid #ccc;
  }
  table {
    border-collapse: collapse;
    background-color: #fff;
    width: 100%;
  }
  td {
    padding: 20px;
  }
  .home-page {
    background-color:rgba(239,241,245,1);
  }
  .home-page-inner {
    margin-top: 10px;
  }
</style>
