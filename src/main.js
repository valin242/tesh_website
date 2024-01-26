// import './assets/main.css'

// import { createApp } from 'vue'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

Vue.use(Vuetify)

const firebaseConfig = {
    apiKey: "AIzaSyADNVyxnt7968BXtQN0Wm5Arr5E_cRNa_8",
    authDomain: "personal-website-c86c9.firebaseapp.com",
    databaseURL: "https://personal-website-c86c9-default-rtdb.firebaseio.com",
    projectId: "personal-website-c86c9",
    storageBucket: "personal-website-c86c9.appspot.com",
    messagingSenderId: "847593821017",
    appId: "1:847593821017:web:d1483c7452f41edcc43248",
    measurementId: "G-DDGX5LQ7XX"
  };
  

initializeApp(firebaseConfig)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
