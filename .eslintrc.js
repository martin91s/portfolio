module.exports = {
    root: true,
    parserOptions: {
        'parser': 'babel-eslint',
    },
    env: {
        browser: true,
        node: true,
    },
    extends: '@netsells',
    // required to lint *.vue files
    // plugins: [
    //     'html',
    // ],
    // add your custom rules here
    rules: {
        // allow paren-less arrow functions
        'arrow-parens': 0,
        // allow async-await
        'generator-star-spacing': 0,
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
        // Require JSDoc on all functions and classes
        'require-jsdoc-except/require-jsdoc': [1, {
            require: {
                FunctionDeclaration: true,
                MethodDefinition: true,
                ClassDeclaration: true,
                ArrowFunctionExpression: true,
                FunctionExpression: true,
            },
            ignore: [
                // Ignore all the standard VueJS lifecycle methods
                'beforeCreate',
                'created',
                'beforeMount',
                'mounted',
                'beforeDestroy',
                'destroyed',
                'beforeUpdate',
                'updated',
                'data',

                // Nuxt methods
                'asyncData',
                'beforeRouteLeave',
                'head',

                // Ignore the vue default prop method
                'default',
                'get',
                'set',
                'handler',
            ],
        }],
    },
    globals: {
        use: true,
    },
};
