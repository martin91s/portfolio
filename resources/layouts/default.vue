<template>
    <div>
        <app-header />
        <nuxt/>
        <app-footer />
    </div>
</template>

<script>
    import AppHeader from '../components/layout/AppHeader';
    import AppFooter from '../components/layout/AppFooter';

    export default {
        components: { AppFooter, AppHeader },
    };
</script>

