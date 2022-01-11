import Vue from 'vue'
import VueRouter from 'vue-router'

import { observador } from "../firebase/firebase.js";

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: () => import( '../views/Home.vue'),
  
  },
  {
    path: '/login',
    component: () => import( '../views/Login.vue'),
  },
  {
    path: "/about",
    component: () => import( '../views/About.vue'),
    beforeEnter: (to, from, next) => {
      let allow = true;
      if (allow) {
        next();
      } else {
        next("/");
      }
    }
  },
  {
    path: "*",
    redirect: "/login"
  }
] 

const router = new VueRouter({
  mode: "history",
  routes
});

router.beforeEach((to, from, next) => {
  observador(to, next);
});


export default router