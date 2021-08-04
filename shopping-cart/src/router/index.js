import { createRouter, createWebHistory } from 'vue-router'
import Store from '../components/Store';
import Cart from '../components/Cart';

const routes = [
  {
    path: '/',
    name: 'Store',
    component: Store,
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart,
  }
]

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

export default router
