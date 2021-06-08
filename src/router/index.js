import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: ()=> import(/* webpackChunkName: "Home" */'../views/Home/Home.vue')
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: ()=> import(/* webpackChunkName: "Dashboard" */'../views/Dashboard/Dashboard')
  },
  {
    path: '/recipes',
    name: 'Recipes',
    component: ()=> import(/* webpackChunkName: "Recipes" */'../views/Dashboard/Recipes')
  },
  {
    path: '/save-recipes',
    name: 'SaveRecipes',
    component: ()=> import(/* webpackChunkName: "SaveRecipes" */'../views/Dashboard/SaveRecipes')
  },
  {
    path: '/create-recipe',
    name: 'CreateRecipe',
    component: ()=> import(/* webpackChunkName: "CreateRecipe" */'../views/Dashboard/CreateRecipe')
  },
  {
    path: '/auth',
    name: 'LoginRegister',
    component: ()=> import(/* webpackChunkName: "LoginRegister" */'../views/Auth/LoginRegister')
  },
  {
    path: '/detail/:userID/:postID',
    name: 'DetailRecipe',
    component: ()=> import(/* webpackChunkName: "DetailRecipe" */'../views/Home/DetailRecipe')
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
