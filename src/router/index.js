import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import AuthLayout from '@/layouts/AuthLayout.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/why-dayforward', name: 'Why', component: () => import('@/pages/Why.vue') },
    { path: '/about', name: 'About', component: () => import('@/pages/About.vue') },
    { path: '/signin', name: 'Signin', component: () => import('@/pages/Signin.vue'), meta: { layout: AuthLayout } },
    { path: '/help', name: 'Help', component: () => import('@/pages/Help.vue') },
    { path: '/q', name: 'QQuote', component: () => import('@/pages/QuickQuote.vue') },
  ]
})

router.beforeEach((to, from) => {
  // Admin Guard
  // if (to.meta.requireAuth && to.path.includes('admin') && to.name !== ROUTE_NAMES.ADMIN_SIGNIN)
  //   return { name: ROUTE_NAMES.ADMIN_SIGNIN }
  // // Agent Guard
  // if (to.meta.requireAuth && to.path.includes('agent') && to.name !== ROUTE_NAMES.AGENT_SIGNIN)
  //   return { name: ROUTE_NAMES.AGENT_SIGNIN }
})

export default router