<template>
    <section :style="{ backgroundImage: `url(${ image })` }" class="testimonials">
        <div class="content">
            <b-container>
                <client-only>
                    <carousel
                        loop
                        :per-page="1"
                        autoplay
                        :controls="false"
                        :indicators="false"
                    >
                        <slide v-for="testimonial in testimonials" :key="testimonial.id">
                            <p v-html="testimonial.content" />
                            <span>By {{ testimonial.author }}</span>
                        </slide>
                    </carousel>
                </client-only>
            </b-container>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'testimonials',

        props: {
            testimonials: {
                type: Array,
                required: true,
            },
        },

        data() {
            return {
                image: require('../assets/img/bridge-image.jpg'),
            };
        },
    };
</script>

<style lang="scss" scoped>
    .testimonials {
        background-image: linear-gradient(to right top, #a3bded, #95b2e3, #86a7da, #789cd0, #6991c7);
        height: 400px;
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-size: cover;
        position: relative;
        background-position: center;
        &:before {
            background: rgba(105, 145, 199, 0.9);
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            content: "";
        }
    }

    .content {
        color: #ffffff;
        height: 100%;
        width: 100%;
        align-items: center;
        display: flex;
    }
</style>
