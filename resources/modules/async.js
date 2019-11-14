
/**
 * Get id from generated slug
 *
 * @param {String} slug
 *
 * @returns {String}
 */
export const getSlugId = (slug) => {
    const parts = slug.toString().split('-');

    return parts[parts.length - 1];
};

/**
 * Fetch the page data
 *
 * @param {Object} app
 * @param {Object} query
 * @param {Object} variables
 * @param {Object} config
 * @param {Object} route
 *
 * @returns {Promise<*>}
 */
export default async function({ app, error }, query, variables = {}, config = { identifier: 'id' }) {
    const client = (app.apolloProvider || app.$apolloProvider).defaultClient;

    if (Object.keys(variables).length === 1) {
        config.identifier = Object.keys(variables)[0];
    }

    if (variables[config.identifier]) {
        variables[config.identifier] = getSlugId(variables[config.identifier]);
    }

    const { data } = await client.query({
        query,
        prefetch: true,
        variables,
    });

    (config.requiredEntities || []).forEach((entity) => {
        if (!data[entity]) {
            return error({
                statusCode: 404,
            });
        }
    });

    return data;
}
