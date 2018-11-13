<template>
  <div>
    <div>
    <div class="titletext">{{$t('prepare_preparation')}}</div>
    <div class="titletext">{{$t('prepare_PC')}}</div>
    {{$t('prepare_PC_line1')}}</br>
    {{$t('prepare_PC_line2')}}</br>
    {{$t('prepare_PC_line3')}}</br>
    {{$t('prepare_PC_line4')}}</br>
    {{$t('prepare_PC_line5')}}</br>
    </br>
    <div class="titletext">{{$t('prepare_mobile')}}</div>
    </br>
    {{$t('prepare_mobile_line1')}}</br>
    {{$t('prepare_mobile_line2')}}</br>
    {{$t('prepare_mobile_line3')}}</br>
    </div>
      <div>
        <div class="titletext">{{$t('prepare_mining')}}</div>
        {{$t('prepare_excel_1')}}
        <table border="1" style="width:60%;margin-left:20%;text-align:center;">
          <tr>
            <td>{{$t('prepare_excel_1_remain_before')}}429,600{{$t('prepare_excel_1_remain_after')}}</td>
            <td>{{$t('prepare_excel_1_mining_before_1')}}1.000EOS{{$t('prepare_excel_1_mining_after')}}</td>
          </tr>
          <tr v-for="(mining,index) in mininglist" :key="index">
            <td>{{$t('prepare_excel_1_remain_before')}}{{mining[0]}}{{$t('prepare_excel_1_remain_after')}}</td>
            <td>{{$t('prepare_excel_1_mining_before')}}{{mining[1]}}{{$t('prepare_excel_1_mining_after')}}</td>
          </tr>
        </table>
        {{$t('prepare_excel_2')}}
        <table border="1" style="width:60%;margin-left:20%;text-align:center;">
          <tr v-for="(miningcoin,index) in miningcoinlist" :key="index">
            <td>{{miningcoin[0]}}{{$t('prepare_excel_2_1_before')}}{{$t(miningcoin[1])}}{{$t('prepare_excel_2_1_after')}}</td>
            <td>{{miningcoin[2]}}{{$t('prepare_excel_2_2')}}</td><td>{{$t('prepare_excel_2_3')}}{{miningcoin[3]}}</td>
          </tr>
        </table>
        {{$t('prepare_excel_3')}}</br>
        {{$t('prepare_excel_3_1')}}</br>
        {{$t('prepare_excel_3_2')}}</br>
        {{$t('prepare_excel_3_3')}}</br>
        </br>
        {{$t('prepare_excel_4')}}</br>
        <div class="titletext">{{$t('prepare_exchange')}}</div>
        {{$t('prepare_exchange_1')}}</br>
        {{$t('prepare_exchange_2')}}</br>
        {{$t('prepare_exchange_3')}}</br>
        {{$t('prepare_exchange_4')}}</br>
        {{$t('prepare_exchange_5')}}</br>
        {{$t('prepare_exchange_6')}}</br> 
        {{$t('prepare_exchange_7')}}</br>
        {{$t('prepare_exchange_8')}}</br>
      </div>
  </div>
</template>

<script>
export default {
  name: 'prepare',
  data () {
    return {
      mininglist:[
        ["408,120","1.100EOS"],
        ["386,640","1.210EOS"],
        ["365,160","1.331EOS"],
        ["343,680","1.464EOS"],
        ["322,200","1.611EOS"],
        ["279,240","1.772EOS"],
        ["408,120","1.949EOS"],
        ["257,760","2.144EOS"],
        ["236,280","2.358EOS"],
        ["214,800","2.594EOS"],
        ["193,320","2.853EOS"],
        ["171,840","3.138EOS"],
        ["150,360","3.452EOS"],
        ["128,880","3.797EOS"],
        ["107,400","4.177EOS"],
        [" 85,920","4.595EOS"],
        [" 64,440","5.054EOS"],
        [" 42,960","5.560EOS"],
        [" 21,480","6.116EOS"]],
      miningcoinlist:[	  
        [1,"BTC","2,100","0.49%"],
        [1,"ETH","10,000","2.32%"],
        [1,"LTC","8,400","1.95%"],
        [1,"BNB","19,000","4.42%"],
        [1,"RIC","50,000","11.64%"],
        [1,"OMG","14,000","3.26%"],
        [1,"AE","27,000","6.28%"],
        [1,"NEO","10,000","2.33%"],
        [1,"USDT","30,000","6.98%"],
        [1,"PTR","10,000","2.33%"],
        [1,"XMR","1,620","0.38%"],
        [1,"QTUM","10,000","2.33%"],
        [5,"BTM","28,000","6.52%"],
        [5,"HT","10,000","2.33%"],
        [5,"EOS","20,000","4.66%"],
        [10,"IOTA","27,000","6.28%"],
        [10,"ZB","21,000","4.89%"],
        [50,"XLM","37,400","8.70%"],
        [100,"ADA","31,100","7.24%"],
        [500 ,"DOGE","23,180","5.40%"],
        [500,"RIPPLE","20,000","4.65%"],
        [500,"TRX","19,800","4.61%"]],
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
</style>
