<template>
  <div>
    <div style="text-align:center;">
      <div class="button" style="margin-left:5px;">我的通证数量：12781</div>
      <div class="button" style="margin-left:5px;">我的通证累积获得收益：675.27 EOS</div>
    </div>
    <div class="titletext">系统中目前通证数量：21315726</div>
    <div class="titletext">今日目前收益：7417.426 EOS</div>
    <div class="titletext">今日目前收益奖励所有通证持有者：4450.4556 EOS</div>
    <div class="titletext">今日目前所有持有者持有量：8684274</div>
    <div class="titletext">今日目前通证持有者收益：0.0005 EOS/通证</div>
    <div class="titletext">今日目前累加收益奖励整版纪念币收藏家：741.7426 EOS</div>
    <div class="titletext">目前集齐整版纪念币累计奖池：8428.2462 EOS</div>
    <div class="titletext">今日目前收益用于回购通证：2225.2278 EOS</div>
    <div class="titletext">今日目前需回购通证数量：179251 EOS</div>
    <div class="titletext">今日目前通证回购价格：0.0124 EOS/通证</div>
    <div style="text-align:center;" class="columns">
      <div class="column">
      </div>
      <div class="column">
        出售数量：
        <input class="input is-small" style="width:90px" type="text" placeholder="输入数量">
        <div>
          <a class="button" style="margin-left:5px">出售通证</a>
        </div>
      </div>
      <div class="column">
        转让数量：
        <input class="input is-small" style="width:90px" type="text" placeholder="输入数量">
        <div>
          <a class="button" style="margin-left:5px">转让通证</a>
        </div>
      </div>
      <div class="column">
      </div>
    </div>
    说明：<br/>
    1.通证总量：300,000,000;<br/>
    2.通证分配：<br/>
    <br/>
    3.通证收益发放、集齐整版纪念币奖励发放和通证回购均于北京时间晚12:00执行;<br/>
  </div>
</template>

<script>
export default {
  name: 'proof',
  data () {
    return {

    }
  }
}
</script>

<style scoped>
.titletext{
  text-align:center;
  font-weight:bold;
  margin-top:10px;
  margin-bottom:10px;
  font-size:24px
}
</style>
