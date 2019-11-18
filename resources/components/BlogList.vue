<template>
    <section class="blog-list">
        <b-container>
            <b-row>
                <blog-card v-for="post in posts" :key="post.id" :post="post"/>
            </b-row>
        </b-container>
    </section>
</template>

<script>
    import BlogCard from './BlogCard';

    export default {
        name: 'blog-list',

        components: { BlogCard },

        props: {
            posts: {
                type: Array,
                default() {
                    return [];
                },
            },
        },
    };
</script>

<style lang="scss" scoped>
    .blog-list {
        margin: 50px 0;
    }
    /deep/ .blog-card {
        @include make-lg-column(4);
    }
</style>
