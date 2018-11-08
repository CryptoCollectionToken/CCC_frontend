<template>
  <div>
    <img style="margin-left:10%;margin-top:-40%;" alt="" width="80%" srcset=""/>
      <div class="sellplane">
        <div>
          <div v-for="(rank, index) in ranks" :key="index">
            <div class="selltextleft" :style="{'top': gettop(index)}">
              <img alt="" width="30px" :srcset="rank.logourl"/>
              {{rank.name}}({{rank.cointype}})
            </div>
            <div class="selltextright" :style="{'top': gettop(index)}">{{rank.value}}</div>
          </div>
          <img src="../../static/pic/43市值排行.png" class="sellpic" alt="" />
        </div>
      </div>
    <div>
规则说明：</br>
1.北京时间每日晚上11:59根据市值大小队对纪念币进行自动排名；</br>
2.每种纪念币市值=所有面值的该纪念币在北京时间晚上11:59时最近一次交易价格各自乘以每种面值纪念币在所有收藏家手中之和，还没被挖矿出来的纪念币将不计入市值。</br>
例所有收藏家在北京时间2019年1月1日晚11:59分时一共拥有150张五百元狗币，98枚五百元狗币硬币，75张一千元狗币，53张两千元狗币和21张五千元狗币；</br>
五百元狗币最后一次交易价格为2EOS，五百元狗币硬币最后一次交易价格为3EOS，一千元狗币最后一次交易价格为5EOS，两千元狗币最后一次交易价格为12EOS,五千元狗币最后一次交易价格为30EOS；</br>
则狗币市值=150X2EOS+98X3EOS+75X5EOS+53X12EOS+21X30EOS=2235EOS</br>
3.收藏家持有的纪念市值排第一，系统将根据其EOS市值1:2派发通证奖励，如狗币当日市值为2235EOS，则狗币所有收藏家可共同获得4470通证奖励；收藏家持有的纪念币市值排第二，系统将根据其EOS市值1:1.5派发通证奖励，如狗币当日市值为2235EOS,则狗币所有收藏家可共同获得3352.5EOS通证奖励；收藏家持有的纪念币市值排第三，系统将根据其EOS市值1:1派发通证奖励，如狗币当日市值为2235EOS，则狗币所有收藏家可共同获得2235EOS通证奖励；</br>
4.通证奖励将根据收藏家持有的各面值纪念币数量按比例分配，由于通证数量固定且永不增发，当系统中通证不足时，则当期市值排名奖励取消，游戏设置了通证回购机制，当回购到足够当日分配的通证奖励时，市值排名将重新开启，收藏家可关注通证页面查询每日系统中通证数量。</div>
  </div>
</template>

<script>
const allranks = require("../assets/rank.json");
export default {
  name: 'rankreward',
  data () {
    return {
      ranks: allranks,
    }
  },
  methods:{
    gettop: function(index){
      return (222 + index*28)+"px";
    }
  }
}
</script>

<style scoped>
/* sellbuy */
  .sellplane{
      position: relative;/*相对定位*/
      width: 50%;
      margin-left: 25%;
  }
  /*图片部分的设置*/
  .sellpic{
      /*position: static;默认定位,可以省略*/
      margin-top: -70%;
      width: 100%;
      height: 2000px;
  }
  /*文字的设置*/
  .selltextleft{
      position: absolute;/*绝对定位*/
      width: 100%;
      left: 38%;/*离左边0像素*/
      font-size: 18px;
  }
  .selltextright{
      position: absolute;/*绝对定位*/
      width: 100%;
      left: 65%;/*离左边0像素*/
      font-size: 18px;
  }
</style>
