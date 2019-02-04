<template>
  <div>
    <Header></Header>
    <div class="div1" v-for="(cointype, index) in cointypes" :key="index">
      <div class="exchange-middle">
        <a class="button is-fullwidth is-info" @click="gotoCoinPage(type, cointype.type, cointype.value)">
          {{cointype.value}}{{$t('value')}}{{$t(cointype.cointype)}}
          <span class="span1"><span v-if="cointype.type == 2">{{$t('coin')}}</span></span>
        </a>
      </div>
    </div>
    <br/>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
const allcointypes = require("../../../assets/cointypes.json");

export default {
  components: {
    Header,
    Footer
  },
  name: 'selectcoin',
  data () {
    return {
      cointypes: [],
      type: ""
    }
  },
  created: function () {
    this.cointypes = allcointypes[this.$route.params.type].types;
    this.type = this.$route.params.type;
  },
  methods:{
    gotoCoinPage(type, cointype, value){
      this.$router.push({ path: `/mycoin/${type}/${cointype}/${value}`});
    }
  }
}
</script>

<style lang="scss" scoped>
  $baseColor: #5585F9;
  .intro-outer {
    padding: 10px 20px;
    .intro-title {
      padding-left: 10px;
      border-left: 2px solid $baseColor;
      color: $baseColor;
      font-weight: bolder;
    }
  }
  .exchange-middle{
    padding: 10px
  }
</style>
