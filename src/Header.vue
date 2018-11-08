<template>
  <header>
    <nav class="navbar">
      <section class="section1">
        <div class="navbar-brand">
          <div v-for="(page, index) in pages" :key="index">
            <router-link
              class="navbar-item"
                            :to="{ name: page , params:{page: 1}}">
                  {{routes[index]}}
            </router-link>
          </div>
          <div class="select" style="margin-top:5px">
            <select v-model="introductionval">
              <option selected>纪念币介绍</option>
              <option v-for="coin in coins" :value="coin.name">{{coin.name}}</option>
            </select>
          </div>
          <div class="select" style="margin-top:5px">
            <select v-model="rewardval">
              <option selected>奖励</option>
              <option v-for="reward in rewards" :value="reward">{{reward}}</option>
            </select>
          </div>
          <!-- <router-link
            class="navbar-item"
                          :to="{ name: pages[0]}">首页
          </router-link>
          <router-link
            class="navbar-item"
                          :to="{ name: pages[1]}">怎么玩
          </router-link>
          <div class="select" style="margin-top:5px">
            <select>
              <option selected>纪念币介绍</option>
              <option>比特币</option>
            </select>
          </div>
          <router-link
            class="navbar-item"
                          :to="{ name: pages[3]}">挖矿
          </router-link>
          <router-link
            class="navbar-item"
                          :to="{ name: pages[4]}">我的纪念币
          </router-link>
          <router-link
            class="navbar-item"
                          :to="{ name: pages[5]}">纪念币交易
          </router-link>
          <div class="select" style="margin-top:5px">
            <select>
              <option selected>奖励</option>
              <option>
                <router-link
                  class="navbar-item"
                                :to="{ name: pages[6]}">
                </router-link>市值排行奖励
              </option>
            </select>
          </div> -->
          <!-- <router-link
        class="navbar-item"
                      :to="{ name: 'Transaction', params:{address: me.address} }">
            玩前准备
          </router-link> -->
        </div>
        <div class="navbar-end">
          <div class="navbar-item">
          </div>
        </div>
      </section>
    </nav>
  </header>
</template>

<script>
const allcoins = require("./assets/coins.json");
export default {
  name: 'Header',
  data () {
    return {
      pages: ["HomePage", "Prepare", "Introduction", "Mining", "Mine", "Transaction", "RankReward", "CombineReward", "GloryReward", "Proof", "Refer"],
      routes: ["首页","怎么玩","纪念币介绍","挖矿","我的纪念币","纪念币交易","市值排行奖励","组合奖励","衔级奖励","通证","推荐计划"],
      rewards: ["市值排行奖励","组合奖励","衔级奖励"],
      introductionval: "纪念币介绍",
      rewardval: "奖励",
      coins: allcoins,
    }
  }, 
  watch: { 
    introductionval: function(val) {
      console.log(val);
    },
    rewardval: function(val) {
      console.log(val);
    } 
  }
}
</script>

<style scoped>
.notification {
  margin-bottom: 0;
  font-size: 0.8rem;
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: break-all;
}
header {
  position: relative;
}
.navbar {
  background-color: #000000;
  /*background: none;
  position: absolute; */
  top: 0;
  left: 0;
  right: 0;
  /* padding-left: 30px; */
}
/* .sig-home-header .navbar {
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
} */

.navbar-item {
  font-weight: 700;
  padding: 0.7rem;
  /* margin: 0.5rem 2rem; */
  font-size: 1.14rem;
  color: #fff;
}
.navbar-brand {
  padding-top: 400px;
}
a.navbar-item:hover {
  color: #fdda46 !important;
  background-color: transparent !important;
}
.avatar {
  border-radius: 100%;
  margin-right: 8px;
  max-height: 2.9rem;
}
.section1 {
  background-image: url("../static/pic/主页图.png");
  background-size: 100%;
  width: 100%;
  background-repeat: no-repeat;
  background-color: #000;
  background-size:auto;
  background-position-x: 50%
  /* @media (max-width: 800px) {
    background-size: cover;
    padding-left: 1000px;
  } */
}
</style>
