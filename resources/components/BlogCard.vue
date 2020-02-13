<template>
    <div class="blog-card">
        <div class="inner">
            <nuxt-link to="#">
                <div :style="{ backgroundImage: `url(${ post.content.image })` }" class="image" />
            </nuxt-link>
            <div class="content">
                <time>
                    {{ $moment(post.created_at).format('MMMM Do YYYY') }}
                </time>
                <div class="title">
                    {{ post.content.title }}
                </div>
                <div class="information">
                    {{ post.content.content | truncate({ length: 75 }) }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'blog-card',

        props: {
            post: {
                type: Object,
                default() {
                    return {};
                },
            },
        },
    };
</script>

<style lang="scss" scoped>
    .inner {
        box-shadow: 0 30px 60px -30px #000000;
        border-radius: 6px;
        overflow: hidden;
        height: 100%;
    }

    .image {
        width: 100%;
        height: 250px;
        overflow: hidden;
        background-size: cover;
        background-repeat: no-repeat;
    }

    .content {
        padding: 20px;
    }
</style>
