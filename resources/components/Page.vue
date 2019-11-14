<template>
    <div class="page">
        <component
            :key="blok._uid"
            v-for="blok in blok.body"
            :blok="blok"
            :is="blok.component"
        />
    </div>
</template>

<script>
    export default {
        props: {
            blok: {
                type: Object,
                required: true,
            },
        },
    };
</script>
