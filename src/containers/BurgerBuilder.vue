<template>
    <aux v-if="ingredients !== null ">
        <modal :show="purchasing" :modalClicked="purchaseCancelHandler">
            <orderSummary
                :ingredients="ingredients"
                :continueHandler="purchaseContinueHandler"
                :cancelHandler="purchaseCancelHandler"
                :price="totalPrice"
            />
        </modal>
        <burger :ingredients="ingredients" />
        <buildControls
            :added="addIngredienthandler"
            :removed="removeIngredientHandler"
            :disabled="disabled"
            :price="totalPrice"
            :purchasable="updatePurchaseState(ingredients)"
            :purchasing="purchaseHandler"
        />
    </aux>
    <spinner v-else />
</template>

<script>
import aux from "../hoc/_Aux";
import burger from "../components/Burger/Burger";
import buildControls from "../components/Burger/BuildControls/BuildControls";
import modal from "../components/UI/Modal/Modal";
import orderSummary from "../components/Burger/OrderSummary/OrderSummary";
import spinner from "../components/UI/Spinner/Spinner";
import { mapGetters } from "vuex";

export default {
    components: {
        aux,
        burger,
        buildControls,
        modal,
        orderSummary,
        spinner,
    },
    data() {
        return {
            purchasing: false,
        };
    },
    computed: mapGetters(["ingredients", "totalPrice", "error", "loading"]),

    created() {
        this.$store.dispatch("onInitIngredients");
    },

    methods: {
        addIngredienthandler(type) {
            this.$store.dispatch("onAddIngredient", {
                ingredientName: type,
            });
        },

        removeIngredientHandler(type) {
            this.$store.dispatch("onRemoveIngredient", {
                ingredientName: type,
            });
        },

        disabled(type) {
            return this.ingredients[type] <= 0;
        },

        updatePurchaseState(ingredients) {
            const sum = Object.keys(ingredients)
                .map((igKey) => {
                    return ingredients[igKey];
                })
                .reduce((sum, el) => {
                    return sum + el;
                }, 0);

            return sum > 0;
        },

        purchaseHandler() {
            this.purchasing = true;
        },

        purchaseCancelHandler() {
            this.purchasing = false;
        },

        purchaseContinueHandler() {
            this.$router.push("/checkout");
        },
    },
};
</script>

<style></style>
