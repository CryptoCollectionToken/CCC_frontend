<template>
  <div>
    <Header></Header>
    <div class="allTypePage">
      <h1 class="headline">{{$t('transaction_all')}}</h1>
      <div class="btnContainer">
        <a @click="enter(cointype)" v-for="(cointype, key) in cointypes" :key="key" class="btnOuter">
          <span class="btnInner">
            <span>{{cointype.value}}{{$t('value')}}{{$t(cointype.cointype)}}</span><span v-if="cointype.type == 2">{{$t('coin')}}</span>
          </span>
        </a>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
// const alltransactions = require("../assets/transactions.json");
const allcointypes = require("@/assets/cointypes.json");
import Header from '@/mobile/components/layout/Header';
import Footer from '@/mobile/components/layout/Footer';

export default {
  name: 'alltype',
  components: {
    Header,
    Footer
  },
  data () {
    return {
      cointypes: [],
    //   transactions: alltransactions,
    }
  },
  created: function () {
    // this.cointypes = allcointypes[this.$route.params.type].types;
    // this.type = this.$route.params.type
    for (const coinid in allcointypes) {
      const coin = allcointypes[coinid];
      for (const typeid in coin.types) {
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
      this.$router.push({path: `/m/transactionlist/${sellid.cointype}/${sellid.type}/${sellid.value}`});
    }
  }
}
</script>

<style lang="scss" scoped>
  $baseColor: #5585F9;
  .allTypePage {
    background-color: #fff;
  }
  .headline {
    font-size: 16px;
    color: $baseColor;
    font-weight: bolder;
    text-align: center;
    padding: 10px;
  }
  .btnContainer {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 20px;
  }
  .btnOuter {
    display: block;
    margin: 5px;
    .btnInner {
      padding: 6px;
      background-color: $baseColor;
      color: #fff;
      font-size: 12px;
    }
  }
</style>
