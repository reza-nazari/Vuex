<template>
    <div class="Toolbar">
        <DrawerToggle :clicked="drawerToggleClicked" />
        <Logo />
        <nav class="DesktopOnly">
            <NavigationItems />
        </nav>
    </div>
</template>

<script>
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";

export default {
    components: {
        Logo,
        NavigationItems,
        DrawerToggle,
    },
    props: ['drawerToggleClicked']
};
</script>

<style>
.Toolbar {
    width: 100%;
    height: 56px;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #703b09;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    z-index: 90;
    box-sizing: border-box;
}

.Toolbar nav {
    height: 100%;
}


@media (max-width: 499px) {
    .DesktopOnly {
        display: none;
    }
}
</style>
