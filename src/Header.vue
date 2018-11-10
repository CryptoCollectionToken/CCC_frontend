<template>
  <header>
    <!-- <nav class="navbar">
      <section class="section1">
        <div class="navbar-brand"> -->
          <!-- <div v-for="(page, index) in pages" :key="index"> -->
            <!-- <router-link
              class="navbar-item"
                            :to="{ name: page , params:{page: 1}}">
                  {{routes[index]}}
            </router-link> -->
          <!-- </div> -->
      <section class="section1">
        <nav class="level">
          <!-- Left side -->
          <div class="level-left">
            <div class="level-item">
              <router-link 
                  class="navbar-item"
                                :to="{ name: pages[0]}">
                      {{routes[0]}}
              </router-link>
              <router-link
                  class="navbar-item"
                                :to="{ name: pages[1]}">
                      {{routes[1]}}
              </router-link>
              <div class="select" style="margin-top:5px">
                <select v-model="introductionval">
                  <option selected>纪念币介绍</option>
                  <option v-for="coin in coins" :value="coin.cointype">{{coin.name}}</option>
                </select>
              </div>
            </div>
            <div class="level-item">
              <router-link
                  class="navbar-item"
                                :to="{ name: pages[3]}">
                      {{routes[3]}}
              </router-link>
              <router-link
                  class="navbar-item"
                                :to="{ name: pages[4]}">
                      {{routes[4]}}
              </router-link>
              <router-link
                  class="navbar-item"
                                :to="{ name: pages[5]}">
                      {{routes[5]}}
              </router-link>
            </div>
            <div class="level-item">
              <div class="select" style="margin-top:5px">
                <select v-model="rewardval">
                  <option selected>奖励</option>
                  <option v-for="(reward,index) in rewards" :key="index" :value="rewardpage[index]">{{reward}}</option>
                </select>
              </div>
              <router-link
                  class="navbar-item"
                                :to="{ name: pages[9]}">
                      {{routes[9]}}
              </router-link>
              <router-link
                  class="navbar-item"
                                :to="{ name: pages[10]}">
                      {{routes[10]}}
              </router-link>
              <router-link
                  class="navbar-item"
                                :to="{ name: pages[11]}">
                      {{routes[11]}}
              </router-link>
            </div>
          </div>
            <!-- Right side -->
          <div class="level-right">
            <div class="level-item">
              <div class="navbar-item">
                cryptojinian
              </div>
              <div class="select" style="margin-top:5px;">
                <select v-model="$i18n.locale" :placeholder="$t('switch_lang')">
                  <option value="en">{{$t('English')}}</option>
                  <option value="zh">{{$t('Chinese')}}</option>
                  <option value="ja">{{$t('Japanese')}}</option>
                </select>
              </div>
            </div>
          </div>
        </nav>
      </section>
        <!-- </div> -->
        <!-- <div class="navbar-end">
          <div class="navbar-item">
          </div>
        </div> -->
      <!-- </section>
    </nav> -->
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
      rewardpage: ["rankreward","combinereward/1","gloryreward/1"],
      coins: allcoins,
    }
  }, 
  watch: { 
    introductionval: function(val) {
      if(val === "纪念币介绍") return;
      console.log(val);
      this.$router.push({ path: `/introduction/${val}`});
    },
    rewardval: function(val) {
      if(val === "奖励") return;
      this.$router.push({ path: `/${val}`});
      console.log(val);
    } 
  }
}
</script>

<style scoped>
header {
  position: relative;
}
.navbar {
  background-color: #000000;
  /*background: none;
  position: absolute; */
  /* top: 0;
  left: 0;
  right: 0; */
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
  display:inline;
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
  padding-top: 400px;
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
