<template>
    <div class="banner" :style="{ backgroundImage: `url(${ image })` }" />
</template>

<script>
    export default {
        name: 'banner',

        props: {
            image: {
                type: String,
                default() {
                    return '';
                },
            },
        },
    };
</script>

<style lang="scss" scoped>
    .banner {
        width: 100%;
        height: 400px;
        background-size: cover;
        background-repeat: no-repeat;
    }
</style>
