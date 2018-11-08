<template>
  <div>
    <div style="margin-left:10%;margin-right:10%;" v-if="page == 1">
      <div class="titletext">矿工衔级</div>
      <div class="button" style="margin-left:5px">您的衔级：黄金级</div>
      <div class="button" style="margin-left:5px">您的挖矿次数：1254</div>
      <div class="columns is-mobile">
        <div class="column is-one-quarter">
          <img src="../../static/pic/白皮书图.png" class="img1" alt="" />
        </div>
        <div class="column is-one-quarter">
          <div style="padding-top:25%;">
            草根级矿工
          </div>
        </div>
        <div class="column is-one-quarter">
          <div style="padding-top:25%;">
            挖矿10次
          </div>
        </div>
        <div class="column is-one-quarter">
          <div style="padding-top:25%;">
            <a class="button" @click="">领取10通证奖励</a>
          </div>
        </div>
      </div>
    </div>
    <div style="margin-left:10%;margin-right:10%;" v-if="page == 2">
      <div class="titletext">交易衔级</div>
      <div class="button" style="margin-left:5px">您的衔级：少将级</div>
      <div class="button" style="margin-left:5px">您的交易次数：590</div>
      <div class="columns is-mobile">
        <div class="column is-one-quarter">
          <img src="../../static/pic/白皮书图.png" class="img1" alt="" />
        </div>
        <div class="column is-one-quarter">
          <div style="padding-top:25%;">
            少尉级买家
          </div>
        </div>
        <div class="column is-one-quarter">
          <div style="padding-top:25%;">
            购买纪念币5次
          </div>
        </div>
        <div class="column is-one-quarter">
          <div style="padding-top:25%;">
            <a class="button" @click="">领取20通证奖励</a>
          </div>
        </div>
      </div>
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
      规则说明：<br/>
      由于通证数量固定且永不增发，当系统中通证数量不足时，收藏家可等到系统中有通证时再领取相应奖励，游戏设置了通证回购机制，每24小时回购一次，北京时间晚上12:00回购。<br/>
      <br/>
    </div>

    <div v-if="page == 1" style="text-align:center">
      <a class="button" @click="gotopage(2)">下一页</a>
    </div>
    <div v-if="page == 2" style="text-align:center">
      <a class="button" @click="gotopage(1)">上一页</a>
    </div>
  </div>
</template>

<script>
const allranks = require("../assets/playerrank.json");
export default {
  name: 'gloryreward',
  data () {
    return {
      page: 1,
      ranks: allranks,
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
