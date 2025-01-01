import HomeView from '@/views/home/HomeView.vue'
import AuthView from '@/views/auth/AuthView.vue'
import SignInView from '@/views/auth/SignInView.vue'
import SignUpView from '@/views/auth/SignUpView.vue'

import { ROUTE_PATHS } from '../constants'

export const routes = [
  {
    path: ROUTE_PATHS.HOME,
    component: HomeView,
  },
  {
    path: ROUTE_PATHS.AUTH.ROOT,
    component: AuthView,
    children: [
      {
        path: ROUTE_PATHS.AUTH.SIGN_IN,
        component: SignInView,
      },
      {
        path: ROUTE_PATHS.AUTH.SIGN_UP,
        component: SignUpView,
      },
    ],
  },
]
