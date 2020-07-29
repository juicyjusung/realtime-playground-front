import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import ko from 'vuetify/src/locale/ko';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: {
      customProperties: true,
    },
    themes: {
      light: {
        primary: '#024B64',
        secondary: '#FE9B69',
        accent: '#DC6A4F',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107',
      },
    },
  },
  lang: {
    locales: { ko },
    current: 'ko',
  },
  icons: {
    iconfont: 'fa',
  },
});
