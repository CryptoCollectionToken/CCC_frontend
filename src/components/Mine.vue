<template>
  <div>
    <img style="margin-left:30%;" alt="" width="40%" srcset="../../static/pic/我的纪念币页面主图.png"/>
    <div class="columns is-multiline is-mobile" style="padding-left:20%;padding-right:20%;">
      <a @click="enter(coin.cointype)" v-for="(coin,key) in coins" key="index" class="column is-one-quarter">
        <span style="padding:5px;">
          <div><img alt="" width="100%" :srcset="coin.logourl"/></div>
          <div style="text-align:center">{{coin.name}}</div>
        </span>
      </a>
    </div>
  </div>
</template>

<script>
const allcoins = require("../assets/coins.json");
export default {
  name: 'mine',
  data () {
    return {
      coins: allcoins,
    }
  },
  methods: {
			enter: function (type) {
        // console.log(e.toElement.innerText);
        this.$router.push({ path: `/selectcoin/${type}`});
      }
  }
}
</script>

<style scoped>

</style>
