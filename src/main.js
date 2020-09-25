import Vue from 'vue';
import Vuelidate from 'vuelidate';
import App from './App.vue';

import router from './router/index';
export const eventBus = new Vue();
import {store} from './store/store';

Vue.config.productionTip = false;
Vue.use(Vuelidate);

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app');
