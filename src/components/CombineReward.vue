<template>
  <div>
    <div v-if="page == 1">
      <img style="margin-left:40%;" alt="" width="20%" srcset="../../static/pic/组合奖励主图.png"/>
      <div class="titletext">{{$t('combinereward_edition')}}</div></br>
      <div style="margin-left:20%;" width="60%">
  {{$t('combinereward_edition_1_before')}}20.0000{{$t('combinereward_edition_1_after')}}</br>
  {{$t('combinereward_edition_2')}}</br>
  {{$t('combinereward_edition_3_before')}}3{{$t('combinereward_edition_3_after')}}</br>
  {{$t('combinereward_edition_4')}}</br>
      </div>
      </br>
      <div class="div1">
        <a @click="getreward(28)">
          <span class="span1">{{$t('conbinereward_take')}}</span>
          <img src="../../static/pic/我的纪念币页面按钮图.png" class="img1" alt="" />
        </a>
      </div>
      </br>
    </div>
    <div v-if="page == 2">
      <img style="margin-left:40%;" alt="" width="20%" srcset="../../static/pic/组合奖励主图.png"/>
      <div class="titletext">{{$t('combinereward_thematic')}}</div></br>
      <!-- <div v-for="(cointype, index) in cointypes" :key="index"> -->
      <div v-for="(special, index) in specials" :key="index">
        <div style="text-align:center;">
          {{$t(special)}}
          </br>
        </div>
        </br>
        <div class="div1">
          <a @click="getreward(22 + index)">
            <span class="span1">{{$t('conbinereward_take')}}</span>
            <img src="../../static/pic/我的纪念币页面按钮图.png" class="img1" alt="" />
          </a>
        </div>
        </br>
      </div>
      </br>
    </div>
    <div v-if="page == 3">
      <img style="margin-left:40%;" alt="" width="20%" srcset="../../static/pic/组合奖励主图.png"/>
      <div class="titletext">{{$t('combinereward_thematic')}}</div></br>
      <div v-for="(coin, index) in coins" :key="index">
        <div style="text-align:center;">
          <div><img alt="" width="10%" :srcset="coin.logourl"/></div>
          {{$t(coin.cointype)}}：{{coin_rewards[index]}}{{$t('proof')}}
          </br>
        </div>
        </br>
        <div class="div1">
          <a @click="getreward(index)">
            <span class="span1">{{$t('conbinereward_take')}}</span>
            <img src="../../static/pic/我的纪念币页面按钮图.png" class="img1" alt="" />
          </a>
        </div>
        </br>
      </div>
      </br>
    </div>
    </br>
{{$t('combinereward_rule')}}</br>
{{$t('combinereward_rule_1')}}</br>
{{$t('combinereward_rule_2')}}</br>
{{$t('combinereward_rule_3')}}</br>
{{$t('combinereward_rule_4')}}</br>
{{$t('combinereward_rule_5')}}</br>
</br>
    <div style="margin-left:30%;margin-right:30%;" width="40%">
      <nav class="pagination is-centered" role="navigation" aria-label="pagination">
        <ul class="pagination-list">
          <li><a class="pagination-previous" @click="gotopage(page - 1)"><</a></li>
          <li><a class="pagination-link" :class="thispage(1)" @click="gotopage(1)">1</a></li>
          <li><a class="pagination-link" :class="thispage(2)" @click="gotopage(2)">2</a></li>
          <li><a class="pagination-link" :class="thispage(3)" @click="gotopage(3)">3</a></li>
          <li><a class="pagination-next" @click="gotopage(page + 1)">></a></li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
const allcoins = require("../assets/coins.json");
import API, { eos } from '@/util/api';

export default {
  name: 'combinereward',
  data () {
    return {
      page: 1,
      specials: ['combinereward_thematic_1','combinereward_thematic_2','combinereward_thematic_3','combinereward_thematic_4','combinereward_thematic_5','combinereward_thematic_6'],
      spacial_rewards: [20000, 14000, 12000, 4500, 4000, 2500],
      coin_rewards: [10000, 2200, 2500, 10000, 2000, 1500, 1000, 1800, 3000, 1800, 10000, 1800, 1500, 1800, 2800, 1400, 1200, 1000, 1000, 1000, 1000, 1000],
      coins: allcoins,
    }
  },
  created: function(){
    this.page = this.$route.params.page;
  },
  methods:{
    gotopage: function(page){
      if(page <= 0){
        page = 1;
      }else if(page >= 4){
        page = 3;
      }
      this.$router.push({ path: `/combinereward/${page}`});
    },
    thispage: function(page){
      if(this.page == page) return "is-current";
    },
    getreward: async function(index){
      await API.CollClaimAsync(index);
    }
  }
}
</script>

<style scoped>
  /* button */
  .div1{
      position: relative;/*相对定位*/
      width: 12%;
      margin-left: 44%;
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
.gotoShop {
  background-image: linear-gradient(-180deg,rgb(116, 114, 103),rgb(37, 37, 59));
  background-size: cover;
  height: 48px;
  width: 20%;
  margin-left: 40%;
  background-color: transparent;
  border-color: transparent;
  color: white;
  border-radius: 24px;
}
.titletext{
  text-align:center;
  font-weight:bold;
  font-size:30px;
}
</style>
