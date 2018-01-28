import path from 'path';
import webpack from 'webpack';
import HTMLWebpackPlugin from 'html-webpack-plugin';

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
        filename: '[name].js'
    },
    plugins: [
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
            inject: true        //dynamically adding script tags to our html file
        }),
        //dedupe plugin to eliminate duplicate bundles when generating build
        new webpack.optimize.DedupePlugin(),
        //minify JS plugin
        new webpack.optimize.UglifyJsPlugin()
    ],
    module: {
        loaders: [
            {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
            {test: /\.css$/, loaders: ['style', 'css']}
        ]
    }
}