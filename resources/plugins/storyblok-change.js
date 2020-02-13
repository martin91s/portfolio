import Vue from 'vue';

Vue.mixin({
    mounted() {
        this.storyblokChange();
    },

    methods: {
        /**
         * Live reload for visual editor
         */
        storyblokChange() {
            if (!this.$options.asyncData) {
                return;
            }

            this.$storybridge.on(['input', 'published', 'change'], (event) => {
                if (event.action === 'input') {
                    if (this.home && event.story.id === this.home.id) {
                        this.home.content = event.story.content;
                    }
                } else {
                    window.location.reload();
                }
            });
        },
    },
});
