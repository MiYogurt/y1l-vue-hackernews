// export interface Config {
//     port?: number;
//     projectPath?: string;
//     status404?: string;
//     status500?: string;
//     template?: string;
//     context?: async function;
//     handleError?: Function;
//     webpackConfig?: {
//         base: object;
//         client: object;
//         server: object;
//     }
// }
//

module.exports.default = module.exports = {
    context: req => {
        title: 'Vue HN 2.0'
    },
    webpackConfig: {
        client: {
            resolve: {
                alias: {
                    'create-api': './create-api-client.js'
                }
            }
        },
        server: {
            resolve: {
                alias: {
                    'create-api': './create-api-server.js'
                }
            }
        }
    }
}

if (process.env.NODE_ENV === 'production') {
    module.exports.client.plugins.push(
        new SWPrecachePlugin({
            cacheId: 'vue-hn',
            filename: 'service-worker.js',
            minify: true,
            dontCacheBustUrlsMatching: /./,
            staticFileGlobsIgnorePatterns: [/\.map$/, /\.json$/],
            runtimeCaching: [
                {
                    urlPattern: '/',
                    handler: 'networkFirst'
                },
                {
                    urlPattern: /\/(top|new|show|ask|jobs)/,
                    handler: 'networkFirst'
                },
                {
                    urlPattern: '/item/:id',
                    handler: 'networkFirst'
                },
                {
                    urlPattern: '/user/:id',
                    handler: 'networkFirst'
                }
            ]
        })
    )
}


