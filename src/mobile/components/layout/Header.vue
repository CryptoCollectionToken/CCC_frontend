<template>
  <header>
    <div class="headerContainer">
      <div>
        <div @click="loginScatterAsync" v-if="!scatterAccount" class="login">
          <img src="../../assets/user-login.png" alt="">
          <span>{{$t('login')}}</span>
        </div>
        <div v-if="scatterAccount">{{scatterAccount.name}}</div>
      </div>
      <div class="select mobile-select">
        <select v-model="language" :placeholder="$t('switch_lang')">
          <option value="en">{{$t('English')}}</option>
          <option value="zh">{{$t('Chinese')}}</option>
          <option value="ko">{{$t('Korean')}}</option>
          <!-- <option value="ja">{{$t('Japanese')}}</option> -->
        </select>
      </div>
    </div>
    <div>
      <div class="nav-container">
        <router-link class="nav-item" :to="{ name: pages[0]}">
          <font-awesome-icon icon="home" size="lg"></font-awesome-icon>
          <span>{{$t(routes[0])}}</span>
        </router-link>
        <router-link class="nav-item" :to="{ name: pages[1]}">
          <font-awesome-icon icon="question-circle" size="lg"></font-awesome-icon>
          <span>{{$t(routes[1])}}</span>
        </router-link>
        <router-link class="nav-item" :to="{ name: pages[3]}">
          <font-awesome-icon icon="hammer" size="lg"></font-awesome-icon>
          <span>{{$t(routes[3])}}</span>
        </router-link>
        <router-link class="nav-item" :to="{ name: pages[5]}">
          <font-awesome-icon icon="wallet" size="lg"></font-awesome-icon>
          <span>{{$t(routes[5])}}</span>
        </router-link>
        <router-link class="nav-item" :to="{ name: pages[4]}">
          <font-awesome-icon icon="user-alt" size="lg"></font-awesome-icon>
          <span>{{$t(routes[4])}}</span>
        </router-link>
      </div>
    </div>
      <!--<section class="section1">
        <nav class="level">
          &lt;!&ndash; Left side &ndash;&gt;
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
            &lt;!&ndash; Right side &ndash;&gt;
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
                  &lt;!&ndash; <option value="ja">{{$t('Japanese')}}</option> &ndash;&gt;
                </select>
              </div>
            </div>
          </div>
        </nav>
      </section>-->
  </header>
</template>

<script>
import { mapState, mapActions } from 'vuex';
const allcoins = require("@/assets/coins.json");

export default {
  name: 'Header',
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
  watch: {
    introductionval: function (val) {
      // console.log(isScatterConnected + " " + scatterAccount);
      if (val === this.$t("introduction")) return;
      this.$router.push({path: `/introduction/${val}`});
    },
    rewardval: function (val) {
      if (val === this.$t("reward")) return;
      this.$router.push({path: `/${val}`});
    },
    language: function (val) {
      console.log("language changed");
      this.$i18n.locale = val;
      this.introductionval = this.$t("introduction");
      this.rewardval = this.$t("reward");
    }
  },
  methods: {
    ...mapActions(['connectScatterAsync', 'loginScatterAsync', 'getCoins']),
  },
  computed: {
    ...mapState(['isScatterConnected', 'scatterAccount', 'isScatterLoggingIn']),
  },
  mounted () {
    this.connectScatterAsync();
    this.getCoins();
  },
  created () {
    this.language = this.$i18n.locale;
  }
}
</script>

<style lang="scss" scoped>
  $baseColor: #5585F9;
  .nav-container {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 4px 10px;
    background-color: #fff;
  }
  .nav-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    min-width: 45px;
    color: #4a4a4a;
    &:hover {
      color: $baseColor;
    }
  }
  .nav-item-active {
    color: $baseColor;
  }
  .login {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    img {
      margin-right: 10px;
    }
    font-size: 14px;
  }
  .headerContainer {
    background: $baseColor;
    color: #fff;
    padding: 6px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .mobile-select select {
    background-color: $baseColor!important;
    border: none!important;
    color: #fff;
    outline: none;
    font-size: 14px;
  }
  .select select:active, .select select:focus {
    outline: none!important;
    border: none!important;
    box-shadow: none!important;
  }
  .select::after {
    border-color: #fff!important;
    border-width: 2px!important;
  }
  .select option {
    color: #fff;
  }
</style>
<style lang="scss">
</style>
