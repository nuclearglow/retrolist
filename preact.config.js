import FaviconsWebpackPlugin from 'favicons-webpack-plugin';
import path from 'path';
import { ProvidePlugin } from 'webpack';

export default {
    /**
     * Function that mutates the original webpack config.
     * Supports asynchronous changes when a promise is returned (or it's an async function).
     *
     * @param {object} config - original webpack config.
     * @param {object} env - options passed to the CLI.
     * @param {WebpackConfigHelpers} helpers - object with useful helpers for working with the webpack config.
     * @param {object} options - this is mainly relevant for plugins (will always be empty in the config), default to an empty object
     **/
    webpack(config, env, helpers, options) {

        // for mode development, proxy the dev server to the backend
        if (config.mode === 'development') {
            config.devServer.proxy = {
                '/api': {
                    target: 'http://localhost:9090'
                }
            }
        }

        // configure module scss imports a la @import 'styles/modules/animations'
        let proxyLoader = helpers.getLoadersByName(config, 'proxy-loader')[1];
        let scssIncludePath = path.resolve(process.cwd(), 'src')
        proxyLoader.loader.options.options.sassOptions.includePaths.unshift(scssIncludePath)

        // add favicons generator
        config.plugins.push(
            new FaviconsWebpackPlugin({
                logo: './assets/icons/bag.png',
                cache: true,
                inject: true,
                favicons: {
                    appName: 'retrolist',
                    appDescription: 'retro list manager',
                    developerName: 'Sven Vowe',
                    background: '#1e1e1e',
                    theme_color: '#1e1e1e',
                    appleStatusBarStyle: 'black-translucent',
                    orientation: 'portrait',
                    pixel_art: true,
                    icons: {
                        favicons: true,
                        android: true,
                        appleIcon: true,
                        yandex: true,
                        coast: true,
                        firefox: true,
                        appleStartup: true,
                        windows: false
                    }
                }
            })
        )
        // automatically import preact h when needed
        config.plugins.push(
            new ProvidePlugin({
                h: ['preact', 'h']
            })
        )
    }
}
