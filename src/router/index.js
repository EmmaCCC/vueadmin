import Vue from "vue";
import VueRouter from "vue-router";
const User = () => import("@/views/user/User");
const DashBoard = () => import("@/views/dashboard/DashBoard");

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "user",
    component: User
  },
  {
    path: "/dashborad",
    name: "dashborad",
    component: DashBoard
  },
  {
    path: "/",
    redirect:'/'
  }
];

var router = new VueRouter({
    routes,
    mode:"history"
});

export default router;
