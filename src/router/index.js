import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home/home.vue'
import Chats from '@/views/chats/chats.vue'
import addImage from '@/views/chats/addImage.vue'
import Product from '@/views/product/product.vue'
import Order from '@/views/order/order.vue'
import More from '@/views/more/more.vue'
import Login from '@/views/login/login.vue'

Vue.use(Router)

export default new Router({
	mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/chats',
      name: 'Chats',
      component: Chats
    },
    {
  		path: '/addImage',
  		component: addImage
  	},
    {
      path: '/product',
      name: 'Product',
      component: Product
    },
    {
      path: '/order',
      name: 'Order',
      component: Order
    },
    {
      path: '/more',
      name: 'More',
      component: More
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
