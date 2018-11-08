<template>
  <div>
    <table border="1" style="width:60%;margin-left:20%;text-align:center;">
      <tr><td>累计邀请有效收藏家</td><td>奖励</td></tr>
      <tr><td>第1-10人</td><td>每人30通证</td></tr>
      <tr><td>第11-30人</td><td>每人40通证</td></tr>
      <tr><td>第31-70人</td><td>每人50通证</td></tr>
      <tr><td>第71-100人</td><td>每人60通证</td></tr>
      <tr><td>101人以上</td><td>每人80通证</td></tr>
    </table>
    <br/>
    <br/>
    <div style="text-align:center;">
      您的邀请链接：<input class="input is-small" style="width:80%" type="text" placeholder="输入邀请链接">
    </div>
    <br/>
    <table border="1" style="width:80%;margin-left:10%;text-align:center;">
      <tr><td>被邀请人</td><td>返利金额</td></tr>
      <tr><td>KKKXXXXX4321</td><td>30通证</td></tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'refer',
  data () {
    return {

    }
  }
}
</script>

<style scoped>
td{
    text-align:center;
}
</style>
