<template>
  <div>
    <Header></Header>
    <div style="width: 100%;">
      <img src="../assets/rankreward.png" >
    </div>
    <div class="randRewardPage">
      <div>
        <table>
          <thead>
          <tr>
            <th>{{$t('rankreward_rank')}}</th>
            <th>{{$t('rankreward_type')}}</th>
            <th>{{$t('rankreward_value')}} <p style="font-size: 12px;">(EOS)</p></th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(rank, index) in ranks" :key="index">
            <td style="font-weight: bolder">
              <template v-if="index < 3">
                <div v-show="index == 0"><img alt="" width="20px" srcset="/static/pic/金牌.png"/></div>
                <div v-show="index == 1"><img alt="" width="20px" srcset="/static/pic/银牌.png"/></div>
                <div v-show="index == 2"><img alt="" width="20px" srcset="/static/pic/铜牌.png"/></div>
              </template>
              <span v-else>{{index + 1}}</span>
            </td>
            <td>
              <div class="tablerow2">
                <img alt="" width="30px" :srcset="rank.logourl"/>
                <span>{{rank.cointype}}</span>
              </div>
            </td>
            <td>{{rank.value}}</td>
          </tr>
          </tbody>
        </table>
      </div>
      <!-- <div class="rule">
        <h2 style="color: #F5A623;">{{$t('rankreward_rule')}}</h2>
        <p>{{$t('rankreward_rule_1')}}</p>
        <p>{{$t('rankreward_rule_2')}}</p>
        <p>{{$t('rankreward_rule_3')}}</p>
        <p>{{$t('rankreward_rule_4')}}</p>
        <p>{{$t('rankreward_rule_5')}}</p>
        <p>{{$t('rankreward_rule_6')}}</p>
        <p>{{$t('rankreward_rule_7')}}</p>
        <p>{{$t('rankreward_rule_8')}}</p>
        <p>{{$t('rankreward_rule_9')}}</p>
        <p>{{$t('rankreward_rule_10')}}</p>
        <p>{{$t('rankreward_rule_11')}}</p>
      </div>-->
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import axios from 'axios';
const allcoins = require("@/assets/coins.json");
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

export default {
  name: 'rankreward',
  components: {
    Header,
    Footer
  },
  data () {
    return {
      ranks: [],
      coins: allcoins,
      maxvalue: 0,
      minvalue: 0
    }
  },
  methods: {},
  async mounted() {
    for (const index in this.coins) {
      const onecoin = this.coins[index];
      console.log(onecoin);
      const num = parseInt(index) + 1;
      console.log(num);
      const body = (await axios.get(
        `http://52.231.196.144:8989/api/getmarketvalue/${num}`
      )).data;
      console.log(body);
      this.ranks.push({
        name: onecoin.name,
        cointype: onecoin.cointype,
        logourl: onecoin.logourl,
        value: body.result.marketvalue
      })
    }
    console.log("11");
    this.ranks.sort((a, b) => b.value-a.value)
  }
}
</script>

<style lang="scss" scoped>
  $baseColor: #5585F9;
  .rule {
    border: 1px solid #F5A623;
    padding: 20px;
    margin-top: 20px;
    p {
      font-size: 14px;
      color: #AFAFAF;
      word-break: break-all;
    }
  }
  table {
    width: 100%;
    font-size: 16px;
  }
  tbody {
    background-color: #fff;
    border-radius: 10px;
  }
  tbody tr:nth-child(odd) {
    background-color: #F5F7FF;
  }
  tbody tr td:first-of-type {
    color: $baseColor;
  }
  th,td {
    font-weight: normal;
    text-align: center;
    vertical-align:middle;
    padding: 6px;
  }
  .randRewardPage {
    padding: 20px;
    background-color:rgba(239,241,245,1);
  }
  .tablerow2 {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-left: 20px;
    img {
      margin-right: 10px;
    }
  }
</style>
