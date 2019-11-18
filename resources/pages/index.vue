<template>
    <div class="homepage">
        <banner
            :content="{
                heading: home.content.title,
                sub_heading: home.content.sub_title
            }"
        />
        <skills-section :skills="home.content.skills" />
        <testimonials />
        <blog-list :posts="blog_posts.items"/>
    </div>
</template>

<script>
    import Banner from '../components/Banner';
    import SkillsSection from '../components/SkillsSection';
    import Testimonials from '../components/Testimonials';
    import BlogList from '../components/BlogList';
    import async from '../modules/async';
    import Homepage from '../queries/homepage.gql';

    export default {
        name: 'homepage',

        components: { BlogList, Testimonials, SkillsSection, Banner },

        async asyncData(context) {
            try {
                return await async(context, Homepage);
            } catch(error) {
                console.log(error);
            }
        },

        mounted() {
            this.storyblokChange();
        },

        methods: {
            /**
             * Live reload for visual editor
             */
            storyblokChange() {
                this.$storybridge.on(['input', 'published', 'change'], (event) => {
                    if (event.action === 'input') {
                        if (event.story.id === this.home.id) {
                            this.home.content = event.story.content;
                        }
                    } else {
                        window.location.reload();
                    }
                });
            },
        },
    };
</script>

<style lang="scss" scoped>
</style>
