<template>
    <div :class="{ open: mobile_nav_visible }" class="navigation">
        <nav>
            <ul>
                <li>
                    <nuxt-link to="#">Home</nuxt-link>
                </li>
                <li>
                    <nuxt-link to="#">About</nuxt-link>
                </li>
                <li>
                    <nuxt-link to="#">Blog</nuxt-link>
                </li>
            </ul>
        </nav>

    </div>
</template>

<script>
    import { mapState } from 'vuex';

    export default {
        name: 'app-nav',

        computed: {
            ...mapState('global', [
                'mobile_nav_visible',
            ]),
        },
    };
</script>

<style lang="scss" scoped>
    .navigation {
        visibility: hidden;
        transition: all 0.3s linear;
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        height: 100vh;
        &.open {
            background: rgba(0, 0, 0, 0.9);
            visibility: visible;
        }
    }

    nav {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    ul {
        list-style-type: none;
    }

</style>
