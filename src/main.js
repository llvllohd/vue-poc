import Vue from "vue";
import App from "./App.vue";
import "./icons";
import VueRouter from "vue-router";
import MostPopular from "./components/MostPopular.vue";
import ComboMeals from "./components/ComboMeals.vue";
import Promotions from "./components/Promotions.vue";
import SweetsTreats from "./components/Sweets&Treats.vue";
import HappyMeal from "./components/HappyMeal.vue";
import McCafe from "./components/McCafe.vue";
import Condiments from "./components/Condiments.vue";
import McCafeBakery from "./components/McCafeBakery.vue";
Vue.use(VueRouter);
const routes = [
  { path: "/", component: MostPopular },
  { path: "/combomeals", component: ComboMeals },
  { path: "/promotions", component: Promotions },
  { path: "/sweets&treats", component: SweetsTreats },

  { path: "/happymeal", component: HappyMeal },
  { path: "/mccafe", component: McCafe },
  { path: "/condiments", component: Condiments },
  { path: "/mccafebakery", component: McCafeBakery },
];

const router = new VueRouter({
  routes,
});

Vue.config.productionTip = false;

new Vue({
  router: router,
  render: (h) => h(App),
}).$mount("#app");
