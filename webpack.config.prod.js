import path from 'path';
import webpack from 'webpack';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import WebpackMD5Hash from 'webpack-md5-hash';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

export default {
    debug: true,
    devtool: 'source-map',
    noInfo: false,
    entry: {
        //multiple entry points to enable bundle splitting
        vendor: path.resolve(__dirname, 'src/vendor'),
        main: path.resolve(__dirname, 'src/index')
    },
    target: 'web',
    output: {
        //using dist folder for production build | original files will be created
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        //need to change hardcoded name to the dynamic name
        /*
         * - filename: 'bundle.js'
         * + filename: '[name].js'
         * */
        //need to add md5 hash to name of bundle
        /*
         * - filename: '[name].js'
         * + filename: '[name].[chunkhash].js'
         * */
        filename: '[name].[chunkhash].js'
    },
    plugins: [
        //generating external css file with a hash in file name
        new ExtractTextPlugin('[name].[contenthash].css'),

        //hash the files using MD5 so that their names change when code changes
        new WebpackMD5Hash(),

        //use commonsChunkPlugin for bundle splitting
        //for vendor libraries
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        }),

        new HTMLWebpackPlugin({
            template: 'src/index.html',
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true
            },
            inject: true,        //dynamically adding script tags to our html file
            //properties defined here will be available in index.js file
            // via htmlWebpackPlugin.options.<varName>
            trackJSToken: '<your_track_js_token>'
        }),
        //dedupe plugin to eliminate duplicate bundles when generating build
        new webpack.optimize.DedupePlugin(),
        //minify JS plugin
        new webpack.optimize.UglifyJsPlugin()
    ],
    module: {
        loaders: [
            {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
            //changing css loader
            /*
             * - {test: /\.css$/, loaders: ['style', 'css']}
             * + {test: /\.css$/, loader: ExtractTextPlugin.extract('css?sourceMap')}  // it should generate css sourcemap
             * */
            {test: /\.css$/, loader: ExtractTextPlugin.extract('css?sourceMap')}
        ]
    }
}
