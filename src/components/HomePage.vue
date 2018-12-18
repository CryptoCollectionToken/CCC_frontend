<template>
  <div class="back">
    <div>{{$t('homepage_introduction')}}</div>
    <br/><div style="text-align: center;">{{$t('BTC')}}1{{$t('value')}}{{$t('coin')}}</div><br/>
    <img style="width: 40%;margin-left: 30%;" src="http://www.deaso40.com/jmjnb/纪念币图png/硬币比特币1.png" alt="" /><br/>
    <br/><div style="text-align: center;">{{$t('EOS')}}50{{$t('value')}}</div><br/>
    <img style="width: 80%;margin-left: 10%;" src="http://www.deaso40.com/jmjnb/纪念币图png/EOS 50纸币.png" alt="" /><br/>
    <br/><div style="text-align: center;">{{$t('AE')}}20{{$t('value')}}</div><br/>
    <img style="width: 80%;margin-left: 10%;" src="http://www.deaso40.com/jmjnb/纪念币图png/阿姨币20.png" alt="" /><br/>
    <br/><div style="text-align: center;">{{$t('RIC')}}5{{$t('value')}}</div><br/>
    <img style="width: 80%;margin-left: 10%;" src="http://www.deaso40.com/jmjnb/纪念币图png/韭菜币5.png" alt="" /><br/>
    <br/><div style="text-align: center;">{{$t('XMR')}}2{{$t('value')}}</div><br/>
    <img style="width: 80%;margin-left: 10%;" src="http://www.deaso40.com/jmjnb/纪念币图png/门罗币2.png" alt="" /><br/>
  </div>
</template>

<script>

export default {
  name: 'HomePage',
  data() {
    return {

    };
  },
  methods: {

  }
};

</script>

<style scoped>
.back{
  background-image:url("http://www.deaso40.com/jmjnb/background/backgrounds/new/tenor(1).gif");
  background-repeat:no-repeat;
  background-attachment:fixed;
  background-size: 100%;
  text-shadow:1px 1px 1px #000;
  color:#fff;
}
</style>
