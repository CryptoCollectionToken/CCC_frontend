<template>
  <div>
    <img style="margin-left:30%;" alt="" width="40%" srcset="../../static/pic/挖矿页面.png"/>
    <section class="section2">
      <div style="padding-left:30%">{{$t('mining_canmine_before')}}1000{{$t('mining_canmine_after')}}</div>
      <div style="padding-left:30%">{{$t('mining_cost_before')}}1.0000EOS{{$t('mining_cost_after')}}</div>
      </br>
      <a @click="mining(1)"><img class="minebutton" alt="" srcset="../../static/pic/挖矿页面按钮图1.png"/></a>
      <a @click="mining(2)"><img class="minebutton" alt="" srcset="../../static/pic/挖矿页面按钮图2.png"/></a>
      <a @click="mining(5)"><img class="minebutton" alt="" srcset="../../static/pic/挖矿页面按钮图3.png"/></a>
      <a @click="mining(10)"><img class="minebutton" alt="" srcset="../../static/pic/挖矿页面按钮图4.png"/></a>
    </section>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import API, { eos } from '@/util/api';
export default {
  name: 'mining',
  data () {
    return {

    }
  },
  methods: {
    ...mapActions(['connectScatterAsync', 'scatterAccount']),
    mining: async function (times) {
      // console.log(e.toElement.innerText);
      await API.transferTokenAsync({
        from: this.scatterAccount.name,
        to: 'cryptomeetup',
        memo: 'mining',
        amount: times + ".0000 EOS",
      });
    }
  },
  mounted(){
    this.connectScatterAsync();
  }
}
</script>

<style scoped>
.section1 {
  background-image: url("../../static/pic/挖矿页面.png");
  background-size: 100%;
  background-repeat: no-repeat;
  background-color: #fff;
  height: 350px;
  margin-left: 30%;
  margin-right: 30%;
  @media (max-width: 800px) {
    background-size: cover;
  }
}
.section2 {
  background-size: 100%;
  background-repeat: no-repeat;
  background-color: rgb(156, 202, 245);
  padding-top: 100px;
  padding-bottom: 50px;
  @media (max-width: 800px) {
    background-size: cover;
  }
}
.minebutton {
  padding: 0px;
  width:20%;
  margin-left:40%;
}
</style>
