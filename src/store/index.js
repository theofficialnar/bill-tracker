import Vue from "vue";
import Vuex from "vuex";

import { db } from "@/main";
import { types } from "./mutation-types";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    loading: true,
    billing_dates: [],
    this_month: {}
  },
  mutations: {
    [types.SET_THIS_MONTH]: (state, payload) => {
      state.this_month = payload;
    },
    [types.ENABLE_LOADING]: state => (state.loading = true),
    [types.DISABLE_LOADING]: state => (state.loading = false)
  },
  actions: {
    getThisMonth: async context => {
      let data = {};
      await db
        .collection("dates")
        .where("date", "==", "September 2018")
        .limit(1)
        .get()
        .then(snapshot => {
          if (snapshot.empty) {
            console.log("No document found.");
          } else {
            snapshot.forEach(doc => {
              data = doc.data();
              data.id = doc.id;
            });
          }
        });
      context.commit(types.SET_THIS_MONTH, data);
      context.commit(types.DISABLE_LOADING);
    }
  },
  getters: {
    thisMonth: state => state.this_month,
    isLoading: state => state.loading
  }
});
