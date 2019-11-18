<template>
    <div class="skills-section">
        <b-container>
            <h2>
                Skills:
            </h2>
            <b-row>
                <skill-card v-for="skill in skills" :key="skill.id" :skill="skill" />
            </b-row>
        </b-container>
    </div>
</template>

<script>
    import SkillCard from './SkillCard';

    export default {
        name: 'skills-section',

        components: { SkillCard },

        props: {
            skills: {
                type: Array,
                default() {
                    return [];
                },
            },
        },
    };
</script>

<style lang="scss" scoped>
    .skills-section {
        margin: 50px 0;
    }

    /deep/ .skill-card {
        @include make-lg-column(3);
    }
</style>
