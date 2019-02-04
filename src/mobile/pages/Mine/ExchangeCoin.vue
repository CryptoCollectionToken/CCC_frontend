<template>
  <div>
    <Header></Header>
    <div v-for="(cointype, index) in cointypes" :key="index">
      <div class="exchange-left">
        <div class="exchange-left-picture">
          <span v-if="cointype.type == 1">
            <img width="100%" :src="cointype.coinurl" alt="" />
          </span>
          <span v-if="cointype.type == 2">
            <img width="50%" :src="cointype.coinurl" alt="" />
          </span>
        </div>
        <div class="exchange-left-select">
          <div class="select is-small is-multiple">
            <select multiple size="1" v-model="selectnumbers[index]">
              <option selected>{{$t('mine_serial_number_selection')}}</option>
              <option v-for="(number, index1) in numbers[index]" :key="index1" :value="number.id">
                {{number.coinnumber}}
              </option>
            </select>
          </div>
        </div>
      </div>
      <div class="exchange-right">
        <div class="exchange-right-picture">
          <div v-if="cointype.type == 1">
            <img width="100%" :src="cointype.coinurl" alt="" />
          </div>
          <div v-if="cointype.type == 2">
            <img width="50%" :src="cointype.coinurl" alt="" />
          </div>
        </div>
        <div class="exchange-right-select">
          <label class="checkbox">
            <input type="checkbox" v-model="checkboxindex[index]">
          </label>
        </div>
      </div>
    </div>
    <div class="exchange-middle">
      <a class="button is-fullwidth is-info" @click="exchange()">{{$t('mine_exchange_confirmation')}}</a>
    </div>
    <div class="exchange-bottom">
      <br/>{{$t('mine_rule')}}
      <br/>{{$t('mine_rule_1')}}
      <br/>{{$t('mine_rule_2')}}
      <br/>{{$t('mine_rule_3')}}
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import { mapActions, mapState } from 'vuex';
import API, { eos } from '@/util/api';
const allcointypes = require("../../../assets/cointypes.json");
const allcoins = require("../../../assets/coins.json");

export default {
  components: {
    Header,
    Footer
  },
  name: 'exchangecoin',
  data () {
    return {
      coins: allcoins,
      cointypes: [],
      type: "",
      amount: this.$t('mine_exchange_quantity'),
      numbers: [[],[],[],[],[],[],[],[],[],[]],
      selectnumbers: [[],[],[],[],[],[],[],[],[],[]],
      checkboxindex: [],
      typeid: 0,
    }
  },
  created: function () {
    this.cointypes = allcointypes[this.$route.params.type].types;
    this.type = this.$route.params.type;
    const allcoins = this.existcoins;
    for(const coinid in allcoins){
      const coin = allcoins[coinid];
      for(const cointypeid in this.cointypes){
        const cointype = this.cointypes[cointypeid]
        if(cointype.value == coin.value &&
          cointype.type == coin.type){
          if(coin.cointype == this.type &&
            coin.owner == this.scatterAccount.name){
            this.numbers[cointypeid].push(coin);
          }
        }
      }
    }
    console.log(this.cointypes);
  },
  methods:{
    changed(){
      console.log(this.amount);
      console.log(this.numbers);
    },
    async exchange(){
      var selectedgoal = 0;
      var goalindex = 0;
      for(const index in this.checkboxindex){
        const selected = this.checkboxindex[index];
        if(selected){
          if(selectedgoal != 0){
            this.$toast.open({
              message: 'Selected Too More!',
              type: 'is-danger',
              duration: 3000,
              queue: false,
              position: 'is-bottom',
            })
            return;
          }else{
            for(const typeid in this.coins){
              const type = this.coins[typeid];
              if(type.cointype == this.type){
                this.typeid = parseInt(typeid) + 1;
              }
            }
            selectedgoal = parseInt(this.typeid) + (parseInt(index) * 100);
            goalindex = index;
          }
        }
      }
      var is_down = true;
      var k_index1 = 0;
      var k_index2 = 0;
      var k = "";
      var allvalue = 0;
      for(const index1 in this.selectnumbers){
        const selects = this.selectnumbers[index1];
        for(const index2 in selects){
          const select = selects[index2];
          allvalue += this.numbers[index1][index2].value
          if(k == ""){
            k += select;
            k_index1 = index1;
            k_index2 = index2;
          }else{
            is_down = false;
            k += ",";
            k += select;
          }
        }
      }
      try{
        if(is_down){
          if(k_index1 > goalindex){
            await API.ExchangeCoinDownAsync(k, selectedgoal, this.scatterAccount);
          }else{
            if(this.cointypes[goalindex].value != allvalue){
              this.$toast.open({
                message: 'Can\'t Exchange!',
                type: 'is-danger',
                duration: 3000,
                queue: false,
                position: 'is-bottom',
              })
              return;
            }
            await API.ExchangeCoinAsync(k, this.scatterAccount);
          }
        }else{
          if(this.cointypes[goalindex].value != allvalue){
            this.$toast.open({
              message: 'Can\'t Exchange!',
              type: 'is-danger',
              duration: 3000,
              queue: false,
              position: 'is-bottom',
            })
            return;
          }
          await API.ExchangeCoinAsync(k, this.scatterAccount);
        }
        this.$toast.open({
          message: 'Transaction success!',
          type: 'is-success',
          duration: 3000,
          queue: false,
          position: 'is-bottom',
        })
      } catch (error) {
        console.error(error);
        let msg;
        if (error.message === undefined) {
          msg = JSON.parse(error).error.details[0].message;
        } else {
          msg = error.message;
        }
        this.$toast.open({
          message: `Transaction failed: ${msg}`,
          type: 'is-danger',
          duration: 3000,
          queue: false,
          position: 'is-bottom',
        });
      }
      console.log(k);
      
    }
  },
  watch: { 
    amount: function(val) {
      this.changed();
    },
    numbers: function(val) {
      this.changed();
    }
  },
  computed: {
    ...mapState(['existcoins','scatterAccount']),
  },
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
  .exchange{
    &-left{
      padding: 10px;
      width:48%;
      display:inline-block;
      vertical-align:middle;
      text-align: center;
      &-picture{
      }
      &-select{
      }
    }
    &-right{
      padding: 10px;
      width: 48%;
      vertical-align: middle;
      display:inline-block;
      text-align: center;
      &-picture{
      }
      &-select{
      }
    }
  }
  .exchange-middle{
    padding: 10px
  }
  .exchange-bottom{
    padding: 30px;
    color: #949494;
    font-size:13px;
  }
</style>
