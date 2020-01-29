const path = require('path'); //en desarrollo va a ser ejecutado con node.js por eso puedo requerir cosas de node o codigo de node.
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devMode = process.env.NODE_ENV !== 'production';

//convierte el codigo de javascript por webpack(leer mas)
module.exports = {
    entry: './frontend/app.js',
    output:{
        path: path.join(__dirname, 'backend/public'),
        filename: 'js/bundle.js'
    },
    mode: 'production',

    module:{
        rules:[
            {
                test: /\.css/,
                use: [
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader, // si estoy desarrollo usa el css en javascript si estoy en produccion usa el css
                    'css-loader'
                ]
            } 
        ]
    },

    plugins: [
        new HtmlWebPackPlugin({
            template: './frontend/index.html',
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true
            }
        }),

        new MiniCssExtractPlugin({
            filename: 'css/bundle.css'
        })
    ],
    devtool: 'source-map'
};