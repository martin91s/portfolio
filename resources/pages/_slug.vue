<template>
    <section class="page-content">
        <banner :image="content.banner" />
        <b-container>
            <h1>{{ content.title }}</h1>
            <p>{{ content.content }}</p>
        </b-container>
    </section>
</template>

<script>
    import query from '../queries/generic-page.gql';
    import async from '../modules/async';
    import Banner from '../components/Banner';

    export default {
        components: { Banner },

        async asyncData(context) {
            try {
                return await async(context, query, {
                    id: context.params.slug || 'home',
                });
            } catch (error) {
                error({ statusCode: 404, message: 'Page not found'});
            }
        },

        computed: {
            /**
             * Returns the page content
             *
             * @return {Object}
             */
            content() {
                return this.page.content;
            },
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
                        if (event.story.id === this.page.id) {
                            this.page.content = event.story.content;
                        }
                    } else {
                        window.location.reload();
                    }
                });
            },
        },
    };

</script>
