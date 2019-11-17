<template>
    <section class="blog-list">
        <b-container>
            <b-row>
                <blog-card v-for="i in 3" :key="i.id" />
            </b-row>
        </b-container>
    </section>
</template>

<script>
    import BlogCard from './BlogCard';

    export default {
        name: 'blog-list',

        components: { BlogCard },
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
