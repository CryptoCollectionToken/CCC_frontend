import Vue from 'vue';
import VueI18n from 'vue-i18n';

import zh from './zh';
import en from './en';
import ko from './ko';

Vue.use(VueI18n);

export default new VueI18n({
  locale: 'zh',
  fallbackLocale: 'zh',
  messages: {
    zh,
    en,
    ko,
  },
});
