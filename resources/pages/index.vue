<template>
    <div class="homepage">
        <banner
            :content="{
                heading: home.content.title,
                sub_heading: home.content.sub_title
            }"
        />
        <skills-section :skills="home.content.skills" />
        <testimonials :testimonials="home.content.testimonials" />
        <blog-list :posts="blog_posts.items"/>
    </div>
</template>

<script>
    import Banner from '../components/Banner';
    import SkillsSection from '../components/SkillsSection';
    import Testimonials from '../components/Testimonials';
    import BlogList from '../components/BlogList';
    import Homepage from '../queries/homepage.gql';

    export default {

        components: { BlogList, Testimonials, SkillsSection, Banner },

        async asyncData({ app }) {
            const client = app.apolloProvider.defaultClient;

            const { data } = await client.query({
                prefetch: true,
                query: Homepage,
            });
            return data;
        },
    };
</script>

<style lang="scss" scoped>
</style>
