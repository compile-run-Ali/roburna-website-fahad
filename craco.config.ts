/* eslint-disable no-param-reassign */
import * as webpack from 'webpack'
import { CracoConfig } from '@craco/craco'

const cracoConfig: CracoConfig = {
    webpack: {
        plugins: {
            add: [
                new webpack.ProvidePlugin({
                    // Buffer: [require.resolve('buffer/'), 'Buffer'],
                    // process: require.resolve('process/browser.js'),
                }),
            ],
        },
        configure: (webpackConfig:any, { env, paths }) => {
            webpackConfig.resolve = {
                ...(webpackConfig?.resolve ?? {}),
                fallback: {
                    ...(webpackConfig?.resolve?.fallback ?? {}),
                    stream: false,
                    crypto:false,
                    assert:false,
                    util:false,
                    http:false,
                    https:false,
                    url:false,
                    os:false,

                    // assert: require.resolve('assert/'),
                    // buffer: require.resolve('buffer/'),
                    // crypto: require.resolve('crypto-browserify'),
                    // events: require.resolve('events/'),
                    // http: require.resolve('stream-http'),
                    // https: require.resolve('https-browserify'),
                    // os: require.resolve('os-browserify/browser'),
                    // 'process/browser': require.resolve('process/browser.js'),
                    // stream: require.resolve('stream-browserify'),
                    // 'stream-http': require.resolve('stream-http'),
                    // string_decoder: require.resolve('string_decoder/'),
                    // url: require.resolve('url/'),
                    // util: require.resolve('util/'),
                    // tslib: require.resolve('tslib/'),
                },
            }
            webpackConfig.ignoreWarnings = [/Failed to parse source map/]
            webpackConfig.stats = {
                errorDetails: true,
            }
            return webpackConfig
        },
    },
}

export default cracoConfig