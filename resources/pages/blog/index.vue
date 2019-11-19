<template>
    <div class="blog">
        ddd
    </div>
</template>

<script>
    import async from '../../modules/async';

    export default {
        async asyncData(context) {
            try {
                return await async(context, Homepage);
            } catch(error) {
                //
            }
        },
    };
</script>

<style lang="scss" scoped>
</style>
