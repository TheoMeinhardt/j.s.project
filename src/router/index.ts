import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import ImpressumView from '@/views/ImpressumView.vue'
import DatenschutzView from '@/views/DatenschutzView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
    },
    {
      path: '/impressum',
      name: 'Impressum',
      component: ImpressumView,
    },
    {
      path: '/datenschutz',
      name: 'Datenschutz',
      component: DatenschutzView,
    },
  ],
})

export default router
