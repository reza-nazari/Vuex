<template>
    <div class="Burger">
        <BurgerIngredient type="bread-top" />
        <BurgerIngredient
            v-for="(ingredient, key) in transformerdIngredient"
            :key="key"
            :type="ingredient"
        />

        <BurgerIngredient type="bread-bottom" />
    </div>
</template>

<script>
import BurgerIngredient from "./BurgerIngredient/BurgerInredient";

export default {
    components: {
        BurgerIngredient,
    },
    props: {
        ingredients: {
            type: Object,
        },
    },
    computed: {
        transformerdIngredient() {
            let transformerdIngredient = Object.keys(this.ingredients)
                .map((igKey) => {
                    return [...Array(this.ingredients[igKey])].map((_, i) => {
                        return igKey;
                    });
                })
                .reduce((arr, el) => {
                    return arr.concat(el);
                }, []);

            return transformerdIngredient;
        },
    },
};
</script>

<style>
.Burger {
    width: 100%;
    height: 238px;
    margin: auto;
    text-align: center;
    font-weight: bold;
    font-size: 1.2px;
}

.ingredient {
    font-size: 20px;
}

@media (min-width: 500px) and (min-height: 400px) {
    .Burger {
        width: 350px;
        height: 230px;
    }
}
</style>
