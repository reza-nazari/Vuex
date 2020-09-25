import Vue from "vue";
import VueRouter from "vue-router";

import BurgerBuilder from "../containers/BurgerBuilder.vue";
import Checkout from "../containers/checkout/checkout.vue";
import Orders from "../containers/orders/Orders.vue";
import ContactData from "../containers/checkout/contactData/ContactData.vue";


Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "BurgerBuilder",
        component: BurgerBuilder,
    },
    {
        path: "/orders",
        name: "Orders",
        component: Orders,
    },
    {
        path: "/checkout",
        name: "Checkout",
        component: Checkout,
        children: [
            {
                path: "/checkout/contact-data",
                name: "contact-data",
                component: ContactData,
            },
        ],
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    
    routes,
});

export default router;
