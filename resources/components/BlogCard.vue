<template>
    <div class="blog-card">
        <div class="inner">
            <div :style="{ backgroundImage: `url(${ image })` }" class="image" />
            <div class="content">
                <time>
                    {{ $moment().format('MMMM Do YYYY') }}
                </time>
                <div class="title">
                    My first blog post
                </div>
                <div class="information">
                    {{ text | truncate({ length: 75 }) }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'blog-card',

        data() {
            return {
                image: 'https://picsum.photos/id/1005/400/300',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nulla lorem, hendrerit nec porttitor quis, posuere et ante. Quisque magna metus, viverra vitae congue vel, luctus vel orci. Aliquam erat volutpat. Praesent sollicitudin finibus urna semper accumsan. Etiam lobortis egestas accumsan. Vestibulum quis urna et enim vulputate ullamcorper id vitae eros. Aliquam gravida purus in velit ultricies, vitae rhoncus risus sodales.',
            };
        },
    };
</script>

<style lang="scss" scoped>
    .blog-card {
        &:hover {
            .image {
                transform: scale(1.1);
            }
        }
    }
    .inner {
        box-shadow: 0 30px 60px -30px #000000;
        border-radius: 6px;
        overflow: hidden;
    }

    .image {
        width: 100%;
        height: 250px;
        overflow: hidden;
        background-repeat: no-repeat;
    }

    .content {
        padding: 20px;
    }
</style>
