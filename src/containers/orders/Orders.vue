<template>
    <div v-if="!loading">
        <Order
            v-for="order in orders"
            :key="order.id"
            :ingredients="order.ingredients"
            :price="order.price"
        />
    </div>
</template>

<script>
import axios from '../../axios-orders';
import Order from '../../components/Order/Order';
import {mapGetters} from 'vuex';

export default {
    components: {
        Order,
    },
    computed: mapGetters(['orders', 'loading']),
    beforeMount() {
        this.$store.dispatch('fetchOrders');
    },
};
</script>

<style></style>
