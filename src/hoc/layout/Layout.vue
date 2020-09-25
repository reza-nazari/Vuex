<template>
    <Aux>
        <Toolbar :drawerToggleClicked="sideDrawerToggleHandler" />
        <SideDrawer
                :open="showSideDrawer"
                :closed="sideDrawerClosedHandler"
         />
        <main class="Content">
            <slot></slot>
        </main>
    </Aux>
</template>

<script>
import Aux from "../_Aux";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

export default {
    components: {
        Aux,
        Toolbar,
        SideDrawer,
    },
    data() {
        return {
            showSideDrawer: false,
        };
    },
    methods: {
        sideDrawerClosedHandler() {
            this.showSideDrawer = false;
        },

        sideDrawerToggleHandler() {
            this.showSideDrawer = !this.showSideDrawer;
        },
    },
};
</script>

<style>
.Content {
    margin-top: 72px;
}
</style>
