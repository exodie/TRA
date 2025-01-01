import HomeView from '@/views/home/HomeView.vue'
import AboutView from '@/views/about/AboutView.vue'
import { ROUTE_PATHS } from '../constants'

export const routes = [
  {
    path: ROUTE_PATHS.HOME,
    component: HomeView,
  },
  {
    path: ROUTE_PATHS.ABOUT,
    component: AboutView,
  },
]
