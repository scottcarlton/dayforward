import AppLayout from '../../layouts/AppLayout.vue'

const routes = {
  path: '/application',
  redirect: { name: 'ApplicationHome' },
  component: () => import('./Module.vue'),
  meta: {
    //requireAuth: true,
    layout: AppLayout
  },
  children: [
    {
      path: '',
      name: 'ApplicationHome',
      component: () => import('./pages/Home.vue')
    },
  ]
};

export default router => {
  router.addRoute(routes);
};