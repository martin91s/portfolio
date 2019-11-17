<template>
    <div class="banner">
        <client-only>
            <vue-particles
                color="#404856"
                :particle-opacity="0.2"
                :particles-number="80"
                shape-type="circle"
                :particle-size="4"
                lines-color="#404856"
                :lines-width="1"
                :line-linked="true"
                :line-opacity="0.4"
                :lines-distance="150"
                :move-speed="3"
                :hover-effect="true"
                hover-mode="grab"
                :click-effect="true"
                click-mode="push"
            />
        </client-only>
        <div v-aos class="title">
            <h1>Hi, I'm Martin</h1>
            <h4>I'm a Frontend Developer from Hull</h4>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'banner',
    };
</script>

<style lang="scss" scoped>
    .banner {
        width: 100%;
        height: 600px;
        background-image: linear-gradient(to right top, #a3bded, #95b2e3, #86a7da, #789cd0, #6991c7);
        background-size: cover;
        position: relative;
        overflow: hidden;
        background-repeat: no-repeat;
        display: flex;
        align-items: center;
        justify-content: center;
        clip-path: polygon(
            0 0, /* left top */
            100% 0, /* right top */
            100% 100%, /* right bottom */
            0 80% /* left bottom */
        );
    }

    .title {
        z-index: 10;
        color: #ffffff;
    }

    h1 {
        font-size: 60px;
        font-weight: 700;
    }

    /deep/ #particles-js {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }
</style>
