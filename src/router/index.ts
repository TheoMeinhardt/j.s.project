import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import PrivatCustomersView from '@/views/PrivatCustomersView.vue'
import CompanyCustomersView from '@/views/CompanyCustomersView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
    },
    {
      path: '/privatkunden',
      name: 'PrivatCustomers',
      component: PrivatCustomersView,
    },
    {
      path: '/firmenkunden',
      name: 'CompanyCustomers',
      component: CompanyCustomersView,
    },
  ],
})

export default router
