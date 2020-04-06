import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Cats from '../views/Cats.vue'
import Dogs from '../views/Dogs.vue'
import Pet from '../views/Pets.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  model: 'history',
  base: 'localhost:8800/',
  routes: [
    {
      path: '/cats',
      name: 'cats',
      component: Cats
    },
    {
      path: '/dogs',
      name: 'dogs',
      component: Dogs
    },
    {
      path: '/pets/:species/:id',
      name: 'pet',
      component: Pet
    },
    {
      path: '/',
      name: 'home',
      component: Home
    }
  ]
})

export default router
