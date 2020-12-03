import Vue from 'vue';
import GoogleSignInButton from 'vue-google-signin-button-directive';
import GAuth from 'vue-google-oauth2';
import './assets/styles/transistion.css';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

const gauthOption = {
  clientId: process.env.VUE_APP_CLIENT_ID,
  // scope: 'profile email',
  // prompt: 'select_account',
  scope: 'email',
  prompt: 'consent',
  fetch_basic_profile: false,
};

Vue.use(GAuth, gauthOption);

new Vue({
  GoogleSignInButton,
  router,
  render: (h) => h(App),
}).$mount('#app');
