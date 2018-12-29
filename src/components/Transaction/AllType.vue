<template>
  <div>
    <!-- <img style="margin-left:40%;" alt="" width="20%" srcset="../../../static/pic/纪念币交易页面拍卖主图.png"/> -->
    <div class="title" style="padding-left:10%;padding-right:10%;padding-top:20px;">{{$t('transaction_all')}}</div>
    <div class="columns is-multiline is-mobile" style="padding-left:10%;padding-right:10%;">
      <a @click="enter(cointype)" v-for="(cointype,key) in cointypes" key="index" class="column is-one-fifth">
        <span style="padding:5px;">
          <!-- <div style="text-align:center">{{cointype.name}}</div> -->
          <div class="button is-rounded has-text-centered">{{cointype.value}}{{$t('value')}}{{$t(cointype.cointype)}}<span v-if="cointype.type == 2">{{$t('coin')}}</span></div>
        </span>
      </a>
    </div>
    <br/>
  </div>
</template>

<script>
// const alltransactions = require("../assets/transactions.json");
const allcointypes = require("../../assets/cointypes.json");

export default {
  name: 'alltype',
  data () {
    return {
        cointypes: [],
    //   transactions: alltransactions,
    }
  },
  created: function () {
    // this.cointypes = allcointypes[this.$route.params.type].types;
    // this.type = this.$route.params.type
    for(const coinid in allcointypes){
        const coin = allcointypes[coinid];
        for(const typeid in coin.types){
            const type = coin.types[typeid];
            // type.url = "../" + type.
            // console.log(type);
            this.cointypes.push(type);
        }
    }
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
