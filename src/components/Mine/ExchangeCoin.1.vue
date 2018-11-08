<template>
  <div>
    <img style="margin-left:30%;" alt="" width="40%" srcset="../../../static/pic/我的纪念币页面主图.png"/>
    <!-- <img style="margin-left:35%;" alt="" width="30%" srcset="../../../static/pic/我的纪念币页面按钮图.png"/> -->
    <div v-for="(cointype, index) in cointypes" :key="index">
      <div class="columns is-mobile">
        <div class="column">
          <div>
            <nav class="level is-mobile">
              <div class="level-item has-text-centered">
                <img alt="" width="100px" :srcset="cointype.coinurl"/>
                <div>
                  <label class="checkbox">
                    <input type="checkbox">
                  </label>
                  <div class="columns is-mobile is-gapless">
                    <div class="column">
                      <div class="control">
                        <div class="select is-small" style="width:90px;">
                          <select>
                            <option selected>兑换数量</option>
                            <option>With options</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div class="column">
                      <div class="control">
                        <div class="select is-small" style="width:90px;">
                          <select>
                            <option selected>编号选择</option>
                            <option>With options</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- <img alt="" width="40%" :srcset="cointype.coinurl"/> -->
              </div>
            </nav>
          </div>
        </div>
        <div class="column">
          <div>
            <nav class="level is-mobile">
              <div class="level-item has-text-centered">
                <img alt="" width="100px" :srcset="cointype.coinurl"/>
                <div>
                  <label class="checkbox">
                    <input type="checkbox">
                  </label>
                  <div class="columns is-mobile is-gapless">
                    <div class="column">
                      <div class="control">
                        <div class="select is-small" style="width:90px;">
                          <select>
                            <option selected>兑换数量</option>
                            <option>With options</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div class="column">
                      <div class="control">
                        <div class="select is-small" style="width:90px;">
                          <select>
                            <option selected>编号选择</option>
                            <option>With options</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- <img alt="" width="40%" :srcset="cointype.coinurl"/> -->
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
    <br>
    <div class="div1">
      <a @click="enter()">
        <span class="span1">确认兑换</span>
        <img src="../../../static/pic/我的纪念币页面按钮图.png" class="img1" alt="" />
      </a>
    </div>
  </div>
</template>

<script>
const allcointypes = require("../../assets/cointypes.json");
export default {
  name: 'airdrop',
  data () {
    return {
      cointypes: [],
      type: ""
    }
  },
  created: function () {
    this.cointypes = allcointypes[this.$route.params.type].types;
    this.type = this.$route.params.type;
  },
  methods:{
    enter(){

    }
  }
}
</script>

<style scoped>
/*div1下面 包含着1个图片和1段文字*/
  .div1{
      position: relative;/*相对定位*/
      width: 20%;
      /* height: 140px; */
      margin-left: 40%;
  }
  .div2{
      position: relative;/*相对定位*/
      width: 80%;
      /* height: 140px; */
      margin-left: 10%;
  }
  /*图片部分的设置*/
  .img1{
      /*position: static;默认定位,可以省略*/
      width: 100%;
      height: 40px;
  }
  /*文字的设置*/
  .span1{
      position: absolute;/*绝对定位*/
      width: 100%;
      bottom: 11px;/*离底下0像素*/
      left: 0px;/*离左边0像素*/
      text-align: center;
      font-size: 18px;
  }
</style>
