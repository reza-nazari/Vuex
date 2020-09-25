<template>
    <Aux v-if="show">
        <Backdrop :show="show" :clicked="modalClicked"/>
        <div class="Modal">
            <slot></slot>
        </div>
    </Aux>
</template>

<script>
import Aux from "../../../hoc/_Aux";
import Backdrop from "../Backdrop/Backdrop";
export default {
    components: {
        Aux,
        Backdrop,
    },
    props: ["show", "modalClicked"],
};
</script>

<style>
.Modal {
    position: fixed;
    z-index: 500;
    background-color: white;
    width: 70%;
    border: 1px solid #ccc;
    box-shadow: 1px 1px 1px black;
    padding: 16px;
    left: 15%;
    top: 30%;
    box-sizing: border-box;
    transition: all 0.3s ease-out;
    animation: ShowModal 300ms;
}

@keyframes ShowModal {
    0% {
        transform: translateY(-100vh);
    }
    100% {
        transform: translateY(0);
    }
}

@media (min-width: 600px) {
    .Modal {
        width: 500px;
        left: calc(50% - 250px);
    }
}
</style>
