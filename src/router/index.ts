import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'hud',
      component: () => import('../views/HudView.vue'),
    },
    {
      path: '/login',
      name: 'home',
      component: () => import('../views/Login/LoginView.vue'),
    }
  ]
})

export default router
