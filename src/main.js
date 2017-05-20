// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex';
import Layout from './components/layout';
import router from './router';
import VueResourse from 'vue-resource';
import _ from 'lodash';
import 'animate.css';

Vue.use(VueResourse);
Vue.use(Vuex);

let store = new Vuex.Store({
  /* 数据中心 */
  state: {
    totalPrice: 0,
    orderList: [],
    params: {}
  },
  /* 方法，可以处理state，调用需用commit */
  mutations: {
    increment(state, price) {
      state.totalPrice += price;
    },
    decrement(state, price) {
      state.totalPrice -= price;
    },
    updateOrderList(state, payload) {
      state.orderList = payload;
    },
    updateParams(state, payload) {
      state.params = payload;
    }
  },
  /* 异步处理mutations，无法处理state，调用需用dispatch */
  actions: {
    increase(context, price) {
      context.commit('increment', price);
    },
    decrease(context, price) {
      context.commit('decrement', price);
    },
    fetchOrderList({ commit, state }) {
      Vue.http.post('/api/getOrderList', state.params)
        .then((res) => {
          commit('updateOrderList', res.data.list)
        }, (err) => {
          console.log(err)
        })
    }
  },
  /* 对顶层数据进行过滤。处理state，调用需用getters */
  getters: {
    getTotal(state) {
      return state.totalPrice + '￥';
    },
    getOrderList: state => state.orderList
  }
});

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<Layout/>',
  components: { Layout }
});
