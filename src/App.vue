<template>
  <div id="app">
    <Header />
      <router-view class="view" 
                  :key="key"></router-view>
    <Footer />
  </div>
</template>

<script>
import Header from '@/Header';
import Footer from '@/Footer';
import 'buefy/dist/buefy.css';

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  computed: {
    key() {
      return this.$route.name !== undefined
        ? this.$route.name + +new Date()
        : this.$route + +new Date();
    }
  },
}
// @import 'buefy/lib/buefy.css';
</script>
<style lang="postcss">

/*.view {
  margin-top: 2rem;
  margin-bottom: 2rem;
  margin-left: 1rem;
  margin-right: 1rem;
}*/
/*@media screen and (max-width: 768px) {
  .view {
    margin-left: 1rem;
    margin-right: 1rem;
  }
}*/

</style>
