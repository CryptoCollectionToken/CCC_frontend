<template>
  <div class="reward-page">
    <div v-if="parseInt(page) === 1">
      <div class="top-info">
        <div class="info-container">
          <div class="info-item">
            <div>{{$t(minelevel)}}</div>
            <div>{{$t('gloryreward_your_level')}}</div>
          </div>
          <div class="info-item">
            <div>{{minetimes}}</div>
            <div>{{$t('gloryreward_mining_times')}}</div>
          </div>
        </div>
      </div>
      <div>
        <div class="table-header">
          <div>等级</div>
          <div>挖矿次数</div>
        </div>
        <div class="table-body">
          <div class="table-row" v-for="(miner, key) in miners" :key="key">
            <div class="rankImgTitle">
              <div class="rankImg"><img :src="miner.logourl" style="width: 100%;"></div>
              <div class="rankTitle">{{$t(miner.name)}}</div>
            </div>
            <div class="rank">{{miner.value}}</div>
          </div>
        </div>
      </div>
      <div>
        <table>
          <thead>
          <tr>
            <th>排名</th>
            <th>收藏家</th>
            <th>矿工等级</th>
            <th>挖矿次数</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(rank, index) in mineranks" :key="index">
            <td>{{index + 1}}</td>
            <td>{{rank.name}}</td>
            <td>{{$t(rank.level)}}</td>
            <td>{{rank.buyamount}}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div v-if="parseInt(page) === 2">
      <div class="top-info">
        <div class="info-container">
          <div class="info-item">
            <div>{{$t(buylevel)}}</div>
            <div>{{$t('gloryreward_your_trade_level')}}</div>
          </div>
          <div class="info-item">
            <div>{{buytimes}}</div>
            <div>{{$t('gloryreward_your_buy_times')}}</div>
          </div>
        </div>
      </div>
      <div>
        <div class="table-header">
          <div>等级</div>
          <div>购买纪念币次数</div>
        </div>
        <div class="table-body">
          <div class="table-row" v-for="(transactor, key) in transactors" :key="key">
            <div class="rankImgTitle">
              <div class="rankImg"><img :src="transactor.logourl" style="width: 100%;"></div>
              <div class="rankTitle">{{$t(transactor.name)}}</div>
            </div>
            <div class="rank">{{transactor.value}}</div>
          </div>
        </div>
      </div>
      <div>
        <table>
          <thead>
          <tr>
            <th>排名</th>
            <th>收藏家</th>
            <th>交易等级</th>
            <th>购买次数</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(rank, index) in buyranks" :key="index">
            <td>{{index + 1}}</td>
            <td>{{rank.name}}</td>
            <td>{{$t(rank.level)}}</td>
            <td>{{rank.buyamount}}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div>
      <div v-if="parseInt(page) === 1" style="text-align:center">
        <a class="button" @click="gotopage(2)">{{$t('gloryreward_nextpage')}}</a>
      </div>
      <div v-if="parseInt(page) === 2" style="text-align:center">
        <a class="button" @click="gotopage(1)">{{$t('gloryreward_prevpage')}}</a>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import axios from 'axios';
import { mapState } from 'vuex';
const allminers = require("@/assets/miners.json");
const alltransactors = require("@/assets/transactors.json")
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

export default {
  name: 'gloryreward',
  components: {
    Header,
    Footer
  },
  data () {
    return {
      page: 1,
      minelevel: '',
      minetimes: 0,
      buylevel: '',
      buytimes: 0,
      mineranks: [],
      buyranks: [],
      miners: allminers,
      transactors: alltransactors
    }
  },
  created() {
    this.page = this.$route.params.page;
    this.minelevel = this.$t('gloryreward_grassroots');
    this.buylevel = this.$t('gloryreward_second_lieutenant');
  },
  computed: {
    ...mapState(['scatterAccount']),
  },
  methods: {
    gotopage(page) {
      console.log(this);
      this.$router.push({path: `/m/gloryreward/${page}`});
    },
    gettop(index) {
      return (156 + index*30)+"px";
    },
    minetimetolevel(input) {
      for (const level in allminers) {
        if (input < allminers[level].value) {
          if (parseInt(level) === 0) {
            return " ";
          } else {
            return allminers[level-1].name;
          }
        }
      }
    },
    buytimetolevel(input) {
      for (const level in alltransactors) {
        if (input < alltransactors[level].value) {
          if (parseInt(level) === 0) {
            return " ";
          } else {
            return alltransactors[level-1].name;
          }
        }
      }
    },
  },
  async mounted() {
    console.log(this);
    console.log(this.scatterAccount);
    if (this.scatterAccount) {
      console.log("getting mine times.." + this.scatterAccount.name)
      const body = (await axios.get(
        `http://www.deaso40.com:8989/api/getplayer/${this.scatterAccount.name}`
      )).data.result;
      console.log(body);
      this.minetimes = body.minetimes;
      this.minelevel = this.minetimetolevel(this.minetimes);
      this.buytimes = body.buytimes;
      this.buylevel = this.buytimetolevel(this.buytimes);
    }
    console.log("getting mine ranks..")
    const mineranks = (await axios.get(
      `http://www.deaso40.com:8989/api/getplayermineorder`
    )).data.result;
    console.log(mineranks);
    for (const index in mineranks) {
      const rank = mineranks[index];
      if (rank.owner === "") continue;
      this.mineranks.push({
        name: rank.owner,
        buyamount: rank.minetimes,
        level: this.minetimetolevel(rank.minetimes),
      });
      if (index>=9) break;
    }
    console.log("getting buy times..")
    const buyranks = (await axios.get(
      `http://www.deaso40.com:8989/api/getplayerbuyorder`
    )).data.result;
    console.log(buyranks);
    for (const index in buyranks) {
      const rank = buyranks[index];
      if (rank.owner === "") continue;
      this.buyranks.push({
        name: rank.owner,
        buyamount: rank.buytimes,
        level: this.buytimetolevel(rank.buytimes),
      });
      if (index>=9) break;
    }
  }
}
</script>

<style lang="scss" scoped>
  $baseColor: #5585F9;
  table {
    width: 100%;
    font-size: 15px;
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
    padding: 6px;
  }
  .rank {
    margin-right: 30px;
  }
  .table-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #fff;
    padding: 10px;
    border-radius: 15px;
    margin-bottom: 15px;
  }
  .rankImgTitle {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  .rankTitle {
    color: $baseColor;
    font-weight: bolder;
  }
  .rankImg {
    width: 20%;
    position: relative;
    background-color: $baseColor;
    padding: 5px 10px;
    border-radius: 20%;
    margin-right: 20px;
  }
  .table-header {
    overflow: hidden;
    padding: 20px 20px 10px;
    font-size: 14px;
    div:first-of-type {
      float: left;
    }
    div:last-of-type {
      float: right;
    }
  }
  .reward-page {
    padding: 20px;
    background-color:rgba(239,241,245,1);
  }
  .top-info {
    padding: 20px;
    background-color: $baseColor;
    border-radius: 10px;
  }
  .info-container {
    font-size: 0;
    color: #fff;
  }
  .info-item:first-of-type {
    border-right: 1px solid #fff;
  }
  .info-item {
    display: inline-block;
    width: 50%;
    box-sizing: border-box;
    font-size: 14px;
    :first-child {
      font-size: 24px;
      font-weight: bolder;
    }
    div {
      text-align: center;
    }
  }
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
