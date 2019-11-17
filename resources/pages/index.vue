<template>
    <div class="homepage">
        <banner />
        <skills-section />
        <testimonials />
        <blog-list />
    </div>
</template>

<script>
    import Banner from '../components/Banner';
    import SkillsSection from '../components/SkillsSection';
    import Testimonials from '../components/Testimonials';
    import BlogList from '../components/BlogList';

    export default {
        name: 'homepage',

        components: { BlogList, Testimonials, SkillsSection, Banner },
    };
</script>

<style lang="scss" scoped>

</style>
