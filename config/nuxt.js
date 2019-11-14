const { resolve } = require('path');

const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = {
    mode: 'universal',

    dev: process.env.NODE_ENV === 'development',

    srcDir: resolve(__dirname, '..', 'resources'),

    /*
     ** Headers of the page
     */
    head: {
        title: process.env.npm_package_name || '',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        ],
    },

    /*
     ** Customize the progress-bar color
     */
    loading: { color: '#fff' },

    /*
     ** Global CSS
     */
    css: [
        '@/assets/scss/app.scss',
    ],

    /*
     ** Plugins to load before mounting the App
     */
    plugins: [
        '~/plugins/components.js',
    ],

    /**
     ** Files to auto-inject into style blocks
     */
    styleResources: {
        scss: [
            resolve(__dirname, '../resources/assets/scss/variables.scss'),
            resolve(__dirname, '../node_modules/bootstrap/scss/mixins/**/*.scss'),
            resolve(__dirname, '../resources/assets/scss/mixins/**/*.scss'),
        ],
    },

    /*
     ** Nuxt.js modules
     */
    modules: [
        // Doc: https://bootstrap-vue.js.org
        'bootstrap-vue/nuxt',
        // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios',
        '@nuxtjs/style-resources',
        ['storyblok-nuxt', {
            accessToken: 'zgkba7WhLQwrJN83BHNKGQtt',
            cacheProvider: 'memory'
        }],
    ],

    /*
     ** Axios module configuration
     ** See https://axios.nuxtjs.org/options
     */
    axios: {},

    /*
     ** Build configuration
     */
    build: {
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {
            // Run ESLint on save
            if (ctx.isDev && ctx.isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/,
                });

                config.plugins.push(
                    new StyleLintPlugin({
                        files: './resources/**/*.{scss,vue}',
                    })
                );
            }
        },
    },
};
