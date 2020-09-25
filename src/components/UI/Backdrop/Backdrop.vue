<template>
    <div v-if="show" class="Backdrop" v-on:click="clicked"></div>
</template>

<script>
export default {
    props: ["show", "clicked"],
};
</script>

<style>
.Backdrop {
    width: 100%;
    height: 100%;
    position: fixed;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 100;
    left: 0;
    top: 0;
}
</style>
