<template>
    <div class="Order">
        <p
            >Ingredients:
            <span v-for="ig in ingObj" class="" :key="ig.name">
                {{ ig.name }}({{ ig.amount }})
            </span></p
        >
        <p>
            Price: <strong>{{ price }}</strong>
        </p>
    </div>
</template>

<script>
export default {
    props: ["price", "ingredients"],
    computed: {
        ingObj() {
            const ingredients = [];

            for (let ingredientName in this.ingredients) {
                ingredients.push({
                    name: ingredientName,
                    amount: this.ingredients[ingredientName],
                });
            }
            return ingredients;
        },
    },
};
</script>

<style>
.Order {
    width: 90%;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 10px;
    margin: 20px auto;
    box-sizing: border-box;
}

.Order span {
    text-transform: capitalize;
    display: inline-block;
    margin: 0 8px;
    border: 1px solid #ccb;
    padding: 5px;
}
</style>
