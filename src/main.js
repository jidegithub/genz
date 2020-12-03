import Vue from 'vue';
import GoogleSignInButton from 'vue-google-signin-button-directive';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

new Vue({
  GoogleSignInButton,
  router,
  render: (h) => h(App),
}).$mount('#app');
