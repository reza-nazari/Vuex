<template>
    <div id="app">
        <Layout>
            <!-- <BurgerBuilder />
            <Checkout /> -->
            <router-view></router-view>
        </Layout>
    </div>
</template>

<script>
import Layout from "./hoc/layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder";
import Checkout from "./containers/checkout/checkout";

export default {
    components: {
        BurgerBuilder,
        Layout,
        Checkout,
    },
};
</script>

<style>
*,
*::after,
*::before {
    padding: 0;
    margin: 0;
}
</style>
