import Vue from "vue";
import VueRouter from "vue-router";
const routerPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}
const Home = () => import("@/views/Home");
const Login = () => import("@/views/Login");
const User = () => import("@/views/user/User");
const UserDetail = () => import("@/views/user/UserDetail");
const Role = () => import("@/views/role/Role");
const Dashboard = () => import("@/views/dashboard/Dashboard");

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
        path: "/",
        redirect:'dashboard'
      },
      {
        path: "/dashboard",
        name: "dashboard",
        component: Dashboard
      },
      {
        path: "/user",
        name: "user",
        component: User
      },  
      {
        path: "/userDetail",
        name: "userDetail",
        component: UserDetail
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
  mode: "hash"
});

export default router;
