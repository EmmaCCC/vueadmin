import Vue from "vue";
import VueRouter from "vue-router";
const Home = () => import("@/views/Home");
const Login = () => import("@/views/Login");
const User = () => import("@/views/user/User");
const Role = () => import("@/views/role/Role");

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/",
    name: "home",
    component: Home,
    children: [
      {
        path: "/user",
        name: "user",
        component: User
      },
      {
        path: "/role",
        name: "role",
        component: Role
      }
    ]
  },
  {
    path: "/",
    redirect: "/home"
  }
];

var router = new VueRouter({
  routes,
  mode: "history"
});

export default router;
