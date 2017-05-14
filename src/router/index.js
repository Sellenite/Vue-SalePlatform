import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import Hi from '@/components/Hi';
import IndexPage from '@/pages/index';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: IndexPage
    },
    {
      path: '/Hello',
      name: 'Hello',
      component: Hello,
      children: [
        {
          path: 'Hi',
          component: Hi
        }
      ]
    }
  ]
});
