<template>
  <div>
    <div style="margin-left:10%;margin-right:10%;" v-if="page == 1">
      <div class="titletext">{{$t('gloryreward_miner_level')}}</div>
      <div class="button" style="margin-left:5px">{{$t('gloryreward_your_level')}} {{$t('gloryreward_gold')}}</div>
      <div class="button" style="margin-left:5px">{{$t('gloryreward_mining_times')}} 1254</div>
      <div v-for="(miner,key) in miners" key="index">
        <div class="columns is-mobile">
          <div class="column is-one-quarter">
            <img :src="miner.logourl" class="img1" alt="" />
          </div>
          <div class="column is-one-quarter">
            <div style="padding-top:25%;">
              {{$t(miner.name)}}
            </div>
          </div>
          <div class="column is-one-quarter">
            <div style="padding-top:25%;">
              {{$t('gloryreward_mining_times_before')}}{{miner.value}}{{$t('gloryreward_mining_times_after')}}
            </div>
          </div>
          <div class="column is-one-quarter">
            <div style="padding-top:25%;">
              <a class="button" @click="">{{$t('gloryreward_mining_award_before')}}10{{$t('gloryreward_mining_award_after')}}</a>
            </div>
          </div>
        </div>
      </div><!-- for -->
    </div>
    <div style="margin-left:10%;margin-right:10%;" v-if="page == 2">
      <div class="titletext">{{$t('gloryreward_trade_level')}}</div>
      <div class="button" style="margin-left:5px">{{$t('gloryreward_your_trade_level')}} {{$t('gloryreward_major_genera')}}</div>
      <div class="button" style="margin-left:5px">{{$t('gloryreward_your_buy_times')}} 590</div>
      <div v-for="(transactor,key) in transactors" key="index">
        <div class="columns is-mobile">
          <div class="column is-one-quarter">
            <img :src="transactor.logourl" class="img1" alt="" />
          </div>
          <div class="column is-one-quarter">
            <div style="padding-top:25%;">
              {{$t(transactor.name)}}
            </div>
          </div>
          <div class="column is-one-quarter">
            <div style="padding-top:25%;">
              {{$t('gloryreward_trade_times_before')}}{{transactor.value}}{{$t('gloryreward_trade_times_after')}}
            </div>
          </div>
          <div class="column is-one-quarter">
            <div style="padding-top:25%;">
              <a class="button" @click="">{{$t('gloryreward_trade_award_before')}}20{{$t('gloryreward_trade_award_after')}}</a>
            </div>
          </div>
        </div>
      </div><!-- for -->
    </div>

    <div class="sellplane">
      <div>
        <div v-for="(rank, index) in ranks" :key="index">
          <div class="selltext t2" :style="{'top': gettop(index)}">
            <img alt="" width="30px" :srcset="rank.logourl"/>
            {{rank.name}}
          </div>
          <div class="selltext t3" :style="{'top': gettop(index)}">{{rank.level}}</div>
          <div class="selltext t4" :style="{'top': gettop(index)}">{{rank.buyamount}}</div>
        </div>
        <img src="../../static/pic/衔级奖励页面排名图.png" class="sellpic" alt="" />
      </div>
    </div>

    <div>
      <br/>
      {{$t('gloryreward_rule')}}<br/>
      {{$t('gloryreward_rule_1')}}<br/>
      <br/>
    </div>

    <div v-if="page == 1" style="text-align:center">
      <a class="button" @click="gotopage(2)">{{$t('gloryreward_nextpage')}}</a>
    </div>
    <div v-if="page == 2" style="text-align:center">
      <a class="button" @click="gotopage(1)">{{$t('gloryreward_prevpage')}}</a>
    </div>
  </div>
</template>

<script>
const allranks = require("../assets/playerrank.json");
const allminers = require("../assets/miners.json");
const alltransactors = require("../assets/transactors.json")

export default {
  name: 'gloryreward',
  data () {
    return {
      page: 1,
      ranks: allranks,
      miners: allminers,
      transactors: alltransactors,
      minetimes: 0,
      transacttimes: 0
    }
  },
  created: function(){
    this.page = this.$route.params.page;
  },
  methods:{
    gotopage: function(page){
      this.$router.push({ path: `/gloryreward/${page}`});
    },
    gettop: function(index){
      return (156 + index*30)+"px";
    }
  }
}
</script>

<style scoped>
.titletext{
  text-align:center;
  font-weight:bold;
  font-size:30px
}
/* sellbuy */
  .sellplane{
      position: relative;/*相对定位*/
      width: 50%;
      margin-left: 25%;
  }
  /*图片部分的设置*/
  .sellpic{
      /*position: static;默认定位,可以省略*/
      width: 100%;
      height: 500px;
  }
  /*文字的设置*/
  .selltext{
      position: absolute;/*绝对定位*/
      width: 100%;
      font-size: 18px;
  }
  .t2{
      left: 17%;/*离左边0像素*/
  }
  .t3{
      left: 52%;/*离左边0像素*/
  }
  .t4{
      left: 75%;/*离左边0像素*/
  }
</style>
