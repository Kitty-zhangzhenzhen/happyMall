const path = require('path');
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtracTextPlugin = require('extract-text-webpack-plugin')
module.exports = {
    entry: './src/app.jsx',
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist/',
        filename: 'js/app.js'
    },
    resolve: {
            alias : {
                page        : path.resolve(__dirname, 'src/page'),
                component   : path.resolve(__dirname, 'src/component'),
                util        : path.resolve(__dirname, 'src/util'),
                service     : path.resolve(__dirname, 'src/service')
            }
    },
    module: {
        rules: [
            {
                test: /\.m?jsx$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'react']
                    }
                }
            },
            {
                test: /\.css$/,
                use: ExtracTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                })
            },
            {
                test: /\.scss$/,
                use: ExtracTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8192,
                        name: 'resource/[name].[ext]'
                    }
                }]
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|otf)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8192,
                        name: 'resource/[name].[ext]'
                    }
                }]
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            favicon:'./1.jpg'
        }),
        new ExtracTextPlugin('css/[name].css'),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
            filename: "js/base.js"
        })
    ],
    devServer: {
        port: 8086,
        historyApiFallback:{
            index:'/dist/index.html'
        },
        proxy : {
            '/manage' : {
                target: 'http://admintest.happymmall.com',
                changeOrigin : true
            },
            '/user/logout.do' : {
                target: 'http://admintest.happymmall.com',
                changeOrigin : true
            }
        }
    }
}