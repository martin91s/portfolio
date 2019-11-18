<template>
    <div v-editable="content">
        <h1>{{ content.heading }}</h1>
        <h4>{{ content.sub_heading }}</h4>
    </div>
</template>

<script>
    export default {
        name: 'page-heading',

        props: {
            content: {
                type: Object,
                default() {
                    return {};
                },
            },
        },
    };
</script>
