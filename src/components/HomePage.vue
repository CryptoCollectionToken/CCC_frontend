<template>
  <div class="back">
    <div class="title_picture">{{$t('homepage_introduction')}}</div>
    <br/><div class="title_text">{{$t('BTC')}}1{{$t('value')}}{{$t('coin')}}</div><br/>
    <img class="title_picture_coin" src="http://www.deaso40.com/jmjnb/纪念币图png/硬币比特币1.png" alt="" /><br/>
    <br/><div class="title_text">{{$t('BTC')}}1{{$t('value')}}</div><br/>
    <img class="title_picture" src="http://www.deaso40.com/jmjnb/纪念币图png/中本聪纸币1.png" alt="" /><br/>
    <br/><div class="title_text">{{$t('AE')}}20{{$t('value')}}</div><br/>
    <img class="title_picture" src="http://www.deaso40.com/jmjnb/纪念币图png/阿姨币20.png" alt="" /><br/>
    <br/><div class="title_text">{{$t('RIC')}}5{{$t('value')}}</div><br/>
    <img class="title_picture" src="http://www.deaso40.com/jmjnb/纪念币图png/韭菜币5.png" alt="" /><br/>
    <br/><div class="title_text">{{$t('XMR')}}2{{$t('value')}}</div><br/>
    <img class="title_picture" src="http://www.deaso40.com/jmjnb/纪念币图png/门罗币2.png" alt="" /><br/>
    <br/>
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
.title_text{
  text-align: center;
  font-size: 30px;
}
.title_picture{
  width: 80%;
  margin-left: 10%;
}
.title_picture_coin{
  width: 40%;
  margin-left: 30%;
}
</style>
