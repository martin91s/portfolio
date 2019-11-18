<template>
    <div class="blog">
        ddd
    </div>
</template>

<script>
    import async from '../../modules/async';

    export default {
        name: 'blog',

        async asyncData(context) {
            try {
                return await async(context, Homepage);
            } catch(error) {
                console.log(error);
            }
        },
    };
</script>

<style lang="scss" scoped>
</style>
