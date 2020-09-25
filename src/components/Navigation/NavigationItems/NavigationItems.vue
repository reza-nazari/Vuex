<template>
    <ul class="NavigationItems">
        <NavigationItem link="/" >
            Burger Builder
        </NavigationItem>

        <NavigationItem link="/orders">
            Orders
        </NavigationItem>
    </ul>
</template>

<script>
import NavigationItem from "./NavigationItem/NavigationItem";
export default {
    components: {
        NavigationItem,
    },
};
</script>

<style>
.NavigationItems {
    margin: 0;
    padding: 0;
    list-style-type: none;
    display: flex;
    flex-flow: column;
    align-items: center;
    height: 100%;
}

@media (min-width: 500px) {
    .NavigationItems {
        flex-flow: row;
    }
}
</style>
