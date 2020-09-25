<template>
    <div v-if="ingredients">
        <checkoutSummary
            :ingredients="ingredients"
            :checkoutCancelled="checkoutCancelledHandler"
            :checkoutContinued="checkoutContinuedHandler"
        />
        <router-view></router-view>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import checkoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
export default {
    components: {
        checkoutSummary,
    },
    computed: mapGetters(["ingredients", "totalPrice", "purchased"]),

    methods: {
        checkoutCancelledHandler() {
            this.$router.push("/");
        },

        checkoutContinuedHandler() {
            const path = `/checkout/contact-data`;
            if (this.$route.path !== path)
                this.$router.push({
                    name: "contact-data",
                });
        },
    },
    beforeRouteEnter(to, from, next) {
        next((vm) => {
            if (vm.$store.getters.ingredients) {
                next();
            } else {
                next("/");
            }
        });
    },

    created() {
        this.$store.dispatch("purchaseInit");
    },

    updated() {
        if (this.purchased) {
            this.$router.push("/");
        }
    },
};
</script>

<style></style>
