<template>
    <div class="CheckoutSummary">
        <h1>We hope taste it well!</h1>
        <div style="width: 100%, margin: auto">
            <Burger :ingredients="ingredients" />
        </div>
        <Button btnType="Danger" :clicked="checkoutCancelled">
            Cancel
        </Button>
        <Button btnType="Success" :clicked="checkoutContinued">
            Continue
        </Button>
    </div>
</template>

<script>
import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";

export default {
    components: {
        Burger,
        Button,
    },
    props: ["ingredients", "checkoutCancelled", "checkoutContinued"],
 
    
};
</script>

<style>
.CheckoutSummary {
    text-align: center;
    width: 80%;
    margin: auto;
}

@media (min-width: 600px) {
    .CheckoutSummary {
        width: 500px;
    }
}
</style>
