const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    module: {
        rules:[
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                options: { presets: ['@babel/env'] }
            },
            {
                test: /\.css$/,
                use:["style-loader", "css-loader"]
            }
        ]
    },
    resolve: { extensions: ['*', '.js', '.jsx']}, // resolve files in order if they have same name - https://webpack.js.org/configuration/resolve/#resolveextensions, https://stackoverflow.com/questions/40565361/what-does-resolve-extensions-do-in-webpack
    output: {
        // this is for how files will be served in browser, devServer is for development
        path: path.resolve(__dirname, 'dist/'), // output directory path
        publicPath: '/dist/', // how url of assest will look like eg - /dist/abc.js
        filename: 'bundle.js' //name of output bundle, here its a singel bundle, can be many during code splitting
    },
    devServer:{
        /*content base tells server from where data comes, mostly for static files - 
        public path will be used to determine where the bundles should be served from, 
        and takes precedence */
        contentBase: path.join(__dirname, 'public/'),
        port: 3000,
        publicPath: 'http://localhost:3000/dist/',
        hotOnly: true
    },
    plugins: [new webpack.HotModuleReplacementPlugin()]
}