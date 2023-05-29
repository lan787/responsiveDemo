import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "@/layout/index.vue";

Vue.use(VueRouter);

const routes = [{
  path: "/",
  name: "home",
  component: Layout,
  redirect: 'index',
  children: [{
    path: "/index",
    component:()=>import ('@/views/HomeView.vue'),
    name:'index',
    meta:{title:'首页'}
  }, ],
}];

const router = new VueRouter({
  routes,
});

export default router;