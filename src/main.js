import Vue from "vue";
import App from "./App.vue";
import ElmentUI from "element-ui";


import router from "@/router";

Vue.use(ElmentUI);
import "element-ui/lib/theme-chalk/index.css";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router
}).$mount("#app");
