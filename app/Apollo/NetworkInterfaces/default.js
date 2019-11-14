/**
 * Set up the apollo client
 *
 * @returns {{httpEndpoint: String}}
 */
export default () => {
    return {
        httpEndpoint: 'https://gapi.storyblok.com/v1/api',
        httpLinkOptions: {
            headers: {
                version: 'draft',
                token: process.env.STORYBLOK_TOKEN,
            },
        },
    };
};
