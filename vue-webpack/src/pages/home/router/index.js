import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      redirect: '/index',
    },
    {
      path: '/index',
      component: () =>
        import(/* webpackChunkName: 'index' */ '@/pages/home/views/home.vue'),
    },
  ],
});
