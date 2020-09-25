<template>
    <Aux>
        <Backdrop :show="open" :clicked="closed" />
        <div class="SideDrawer" :class="{Open : open, Close: !open}">
            <div class="LogoS">
                <Logo />
            </div>
            <NavigationItems />
        </div>
    </Aux>
</template>

<script>
import Aux from "../../../hoc/_Aux";
import Backdrop from "../../UI/Backdrop/Backdrop";
import NavigationItems from "../NavigationItems/NavigationItems";
import Logo from "../../Logo/Logo";

export default {
    components: {
        Aux,
        Backdrop,
        NavigationItems,
        Logo,
    },
    props: ['open', 'closed']
};
</script>

<style scoped>
.SideDrawer {
    position: fixed;
    height: 100%;
    width: 280px;
    max-width: 70%;
    left: 0;
    top: 0;
    z-index: 200;
    background-color: #fff;
    padding: 32px 16px;
    box-sizing: border-box;
    transition: transform 0.3s ease;
}

.Open {
    transform: translateX(0);
}

.Close {
    transform: translateX(-100%);
}

.LogoS {
    height: 11%;
    margin-bottom: 32px;
}

@media (min-width: 500px) {
    .SideDrawer {
        display: none;
    }
}
</style>
