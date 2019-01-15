<template>
  <div>
    <img style="margin-left:30%;" alt="" width="40%" srcset="../../../static/pic/我的纪念币页面主图.png"/>
    <!-- <img style="margin-left:35%;" alt="" width="30%" srcset="../../../static/pic/我的纪念币页面按钮图.png"/> -->
    <div v-for="(cointype, index) in cointypes" :key="index">
      <div class="columns" style="padding-left:6%;padding-right:6%">
        <div class="column">
          <div>
            <nav class="level is-mobile">
              <div class="level-item has-text-centered">
                <div v-if="cointype.type == 1">
                  <img width="400px" :src="cointype.coinurl" alt="" />
                </div>
                <div v-if="cointype.type == 2">
                  <img width="200px" :src="cointype.coinurl" alt="" />
                </div>
                <!-- <img alt="" width="300px" :src="cointype.coinurl"/> -->
                <div>
                  <div class="columns is-mobile is-gapless">
                    <!-- <div class="column">
                      <div class="control">
                        <div class="select is-small" style="width:90px;">
                          <select v-model="amount">
                            <option selected>{{$t('mine_exchange_quantity')}}</option>
                            <div class="div1" v-for="(number, index1) in numbers[index]" :key="index1">
                              {{number}}
                            </div>
                            <option>1</option>
                          </select>
                        </div>
                      </div>
                    </div> -->
                    <div class="column">
                      <div class="control">
                        <div class="select is-small is-multiple" style="width:90px;">
                          <select multiple size="4" v-model="selectnumbers[index]">
                            <option selected>{{$t('mine_serial_number_selection')}}</option>
                            <option v-for="(number, index1) in numbers[index]" :key="index1" :value="number.id">
                              {{number.coinnumber}}
                            </option>
                            <!-- <option>1</option> -->
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- <img alt="" width="40%" :src="cointype.coinurl"/> -->
              </div>
            </nav>
          </div>
        </div>
        <div class="column">
          <div>
            <nav class="level is-mobile">
              <div class="level-item has-text-centered">
                <div v-if="cointype.type == 1">
                  <img width="400px" :src="cointype.coinurl" alt="" />
                </div>
                <div v-if="cointype.type == 2">
                  <img width="200px" :src="cointype.coinurl" alt="" />
                </div>
                <div>
                  <label class="checkbox" style="padding-left:8px">
                    <input type="checkbox" v-model="checkboxindex[index]">
                  </label>
                </div>
                <!-- <img alt="" width="40%" :src="cointype.coinurl"/> -->
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
    <br>
    <div class="div1">
      <a @click="exchange()">
        <span class="span1">{{$t('mine_exchange_confirmation')}}</span>
        <img src="../../../static/pic/我的纪念币页面按钮图.png" class="img1" alt="" />
      </a>
    </div>
    <br/>{{$t('mine_rule')}}
    <br/>{{$t('mine_rule_1')}}
    <br/>{{$t('mine_rule_2')}}
    <br/>{{$t('mine_rule_3')}}
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import API, { eos } from '@/util/api';
const allcointypes = require("../../assets/cointypes.json");
const allcoins = require("../../assets/coins.json");

export default {
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

<style scoped>
/*div1下面 包含着1个图片和1段文字*/
  .div1{
      position: relative;/*相对定位*/
      width: 20%;
      /* height: 140px; */
      margin-left: 40%;
  }
  .div2{
      position: relative;/*相对定位*/
      width: 80%;
      /* height: 140px; */
      margin-left: 10%;
  }
  /*图片部分的设置*/
  .img1{
      /*position: static;默认定位,可以省略*/
      width: 100%;
      height: 40px;
  }
  /*文字的设置*/
  .span1{
      position: absolute;/*绝对定位*/
      width: 100%;
      bottom: 11px;/*离底下0像素*/
      left: 0px;/*离左边0像素*/
      text-align: center;
      font-size: 18px;
  }
  .showing_picture{
    width: 80%;
    margin-left: 10%;
  }
  .showing_picture_coin{
    width: 40%;
    margin-left: 30%;
  }
</style>
