<template>
    <header>
        <div class="container">
            <b-row>
                <div class="logo">
                    Logo
                </div>
                <hamburger />
            </b-row>
        </div>
        <app-nav />
    </header>
</template>

<script>
    import AppNav from '../AppNav';
    import Hamburger from './Hamburger';

    export default {
        name: 'app-header',

        components: { Hamburger, AppNav },

    };
</script>

<style lang="scss" scoped>
    header {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        z-index: 20;
        padding: 20px;
        div {
            color: $brand-default;
        }
    }

    /deep/ .hamburger {
        margin-left: auto;
        z-index: 21;
    }
</style>
