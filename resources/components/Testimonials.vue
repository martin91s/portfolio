<template>
    <section :style="{ backgroundImage: `url(${ image })` }" class="testimonials">
        <div class="overlay" />
        <div class="content">
            <b-container>
                carousel
            </b-container>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'testimonials',

        data() {
            return {
                image: require('../assets/img/bridge-image.jpg'),
            };
        },
    }
</script>

<style lang="scss" scoped>
    .testimonials {
        background-image: linear-gradient(to right top, #a3bded, #95b2e3, #86a7da, #789cd0, #6991c7);
        padding: 20px;
        height: 400px;
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-size: cover;
        position: relative;
        background-position: center;
        z-index: -2;
    }

    .overlay {
        background: rgba(105, 145, 199, 0.9);
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
    }

    .content {
        z-index: 2;
        color: #ffffff;
    }
</style>
