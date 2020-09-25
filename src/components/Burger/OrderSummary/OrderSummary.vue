<template>
    <Aux>
        <h3>Your Order</h3>
        <p>A delicious burger with following ingredients:</p>

        <ul>
            <li v-for="(ingredient, key) in transformerdIngredient" :key="key">
                <span style="textTransform: capitalize">{{
                    ingredient.name
                }}</span
                >: {{ ingredient.qtt }}
            </li>
        </ul>
        <p>price: {{ price }}$ </p>
        <p>Continue to checkout?</p>

        <Button btnType="Danger" :clicked="cancelHandler">
            Cancel
        </Button>
        <Button btnType="Success" :clicked="continueHandler">
            Continue
        </Button>
    </Aux>
</template>

<script>
import Aux from "../../../hoc/_Aux";
import Button from "../../UI/Button/Button";

export default {
    components: {
        Aux,
        Button,
    },
    props: ["ingredients", "cancelHandler", "continueHandler", "price"],
    data() {
        return {
            test: [{ name: 1 }, { re: 2 }],
        };
    },

    computed: {
        transformerdIngredient() {
            let ingredient = [];
            let transformerdIngredient = Object.keys(this.ingredients).map(
                (igKey) => {
                    return ingredient.push({
                        name: igKey,
                        qtt: this.ingredients[igKey],
                    });
                },
            );

            return ingredient;
        },
    },
};
</script>

<style scoped>
* {
    margin: 0.5rem;
}
</style>
