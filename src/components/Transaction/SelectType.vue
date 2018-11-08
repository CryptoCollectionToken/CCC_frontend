<template>
  <div>
    <img style="margin-left:40%;" alt="" width="20%" srcset="../../../static/pic/纪念币交易页面拍卖主图.png"/>
    <div style="padding-left:40%;padding-right:40%;">
      <a @click="enter(cointype)" v-for="(cointype,key) in cointypes" key="index">
        <span style="padding:5px;">
          <div><img alt="" width="100%" :srcset="cointype.coinurl"/></div>
          <div style="text-align:center">{{cointype.name}}</div>
        </span>
      </a>
    </div>
  </div>
</template>

<script>
// const alltransactions = require("../assets/transactions.json");
const allcointypes = require("../../assets/cointypes.json");
export default {
  name: 'mine',
  data () {
    return {
        cointypes: [],
    //   transactions: alltransactions,
    }
  },
  created: function () {
    // this.cointypes = allcointypes[this.$route.params.type].types;
    // this.type = this.$route.params.type
    // for(const coinid in allcointypes){
        const coin = allcointypes[this.$route.params.type];
        for(const typeid in coin.types){
            const type = coin.types[typeid];
            // type.url = "../" + type.
            console.log(type);
            this.cointypes.push(type);
        }
    // }
    console.log(this.cointypes);
  },
  methods: {
    enter: function (sellid) {
        // console.log(e.toElement.innerText);
        this.$router.push({ path: `/transactionlist/${sellid.cointype}/${sellid.type}/${sellid.value}`});
    }
  }
}
</script>

<style scoped>

</style>
