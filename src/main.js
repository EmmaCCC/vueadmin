import Vue from "vue";
import App from "./App.vue";
import ElmentUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

import router from "@/router";

Vue.use(ElmentUI);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router
}).$mount("#app");
