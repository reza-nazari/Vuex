import Vue from "vue";
import Vuex from "vuex";
import order from "./modules/order";
import burgerBuilder from "./modules/burgerBuilder";

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        order,
        burgerBuilder,
    },
});
