import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const router = new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      redirect: '/index',
    },
    {
      path: '/index',
      name: 'Index',
      component: () =>
        import(/* webpackChunkName: 'index' */ '@/views/index.vue'),
    },
  ],
});

export default router;
