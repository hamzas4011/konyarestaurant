import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

// knappene som ligger på alle vue sidene.
const routes = [
  {
    path: '/home',
    name: 'Home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/all-matretter',
    name: 'AllMatretter',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "AllMatretter" */ '../views/AllMatretter.vue')
  },

  {
    path: '/all-matretter-admin',
    name: 'AllMatretterAdmin',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "AllMatretterAdmin" */ '../views/AllMatretterAdmin.vue')
  },

  {
    path: '/add-matretter',
    name: 'AddMatretter',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "AddMatretter" */ '../views/AddMatretter.vue')
  },
  {
    path: '/delete-matretter',
    name: 'DeleteMatretter',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "delete-matretter" */ '../views/DeleteMatretter.vue')
  }
  ,
  {
    path: '/edit-matretter',
    name: 'EditMatretter',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "edit-matretter" */ '../views/EditMatretter.vue')
  }
  ,
  {
    path: '/search-matretter',
    name: 'SearchMatretter',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "search-matretter" */ '../views/SearchMatretter.vue')
  },

  {
    path: '/all-drikke',
    name: 'AllDrikke',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "AllDrikke" */ '../views/AllDrikke.vue')
  },

  {
    path: '/all-drikke-admin',
    name: 'AllDrikkeAdmin',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "AllDrikkeAdmin" */ '../views/AllDrikkeAdmin.vue')
  },
  {
    path: '/all-dessert',
    name: 'AllDessert',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "AllDessert" */ '../views/AllDessert.vue')
  },

  {
    path: '/all-dessert-admin',
    name: 'AllDessertAdmin',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "AllDessertAdmin" */ '../views/AllDessertAdmin.vue')
  },
   















  {
    path: '/basket',
    name: 'Basket',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "basket" */ '../views/Basket.vue')
  }
  ,
  {
    path: '/employee-store',
    name: 'EmployeeStore',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "employee-store" */ '../views/EmployeeStore.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
