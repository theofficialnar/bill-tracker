import Vue from "vue";
import { Circle5 } from "vue-loading-spinner";
import VueFire from "vuefire";
import firebase from "firebase/app";
import "firebase/firestore";

import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import "./registerServiceWorker";

require("./assets/main.scss");

Vue.config.productionTip = false;
Vue.component("app-loader", Circle5);
Vue.use(VueFire);

// Firebase setup
var config = {
  apiKey: "AIzaSyD3h9kUhsYq04rPsYWoUlv13xBbsLigYIk",
  authDomain: "bill-tracker-759a6.firebaseapp.com",
  databaseURL: "https://bill-tracker-759a6.firebaseio.com",
  projectId: "bill-tracker-759a6",
  storageBucket: "bill-tracker-759a6.appspot.com",
  messagingSenderId: "1030461486776"
};
firebase.initializeApp(config);
export const db = firebase.firestore();
db.settings({ timestampsInSnapshots: true });

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
