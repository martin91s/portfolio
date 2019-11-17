<template>
    <div class="skill-card">
        <div class="inner">
            {{ skill }}
        </div>
    </div>
</template>

<script>
    export default {
        name: 'skill-card',

        props: {
            skill: {
                type: String,
                default() {
                    return '';
                },
            },
        },
    };
</script>

<style lang="scss" scoped>
    .skill-card {
        margin-bottom: 20px;
        transition: all 0.3s linear;
        &:hover {
            transform: translateY(5px);
        }
    }

    .inner {
        box-shadow: 0 30px 60px -30px #000;
        padding: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 6px;
    }
</style>

