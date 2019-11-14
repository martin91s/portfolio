<template>
    <div class="general" v-editable="blok">
        <banner :image="blok.banner"/>
        <h1>{{ blok.title }}</h1>
        <p>{{ blok.content }}</p>
    </div>
</template>

<script>
    import Banner from './Banner';

    export default {
        name: 'generic-page',

        components: { Banner },

        props: {
            blok: {
                type: Object,
                required: true,
            },
        },
    };
</script>
