<template>
    <button
        @click.prevent="toggleMobileNav"
        :class="{ 'is-active': mobile_nav_visible }"
        class="hamburger hamburger--collapse"
        type="button"
    >
        <span class="hamburger-box">
            <span class="hamburger-inner"></span>
        </span>
    </button>
</template>

<script>
    import { mapState, mapMutations } from 'vuex';

    export default {
        name: 'hamburger',

        computed: {
            ...mapState('global', [
                'mobile_nav_visible'
            ]),
        },

        methods: {
            ...mapMutations('global', [
                'toggleMobileNav'
            ]),
        },
    }
</script>

<style lang="scss" scoped>
    $hamburger-layer-color: #ffffff;

    @import "~hamburgers/_sass/hamburgers/hamburgers";

</style>
