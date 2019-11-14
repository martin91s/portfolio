<template>
    <section>
        <component
            v-if="story.content.component"
            :key="story.content._uid"
            :blok="story.content"
            :is="story.content.component"
        />
    </section>
</template>

<script>
    export default {
        data() {
            return {
                story: {
                    content: {},
                },
            };
        },

        asyncData(context) {
            // Check if we are in the editor mode
            const version = context.query._storyblok || context.isDev ? 'draft' : 'published';

            // Load the JSON from the API
            return context.app.$storyapi.get(`cdn/stories/${ context.params.slug || 'home' }`, {
                version,
            }).then((res) => {
                return res.data;
            }).catch((res) => {
                context.error({ statusCode: res.response.status, message: res.response.data });
            });
        },

        mounted() {
            this.$storybridge.on(['input', 'published', 'change'], (event) => {
                if (event.action === 'input') {
                    if (event.story.id === this.story.id) {
                        this.story.content = event.story.content;
                    }
                } else {
                    window.location.reload();
                }
            });
            console.log(this.$route.params.slug);
        },
    };
</script>

<style>

</style>
