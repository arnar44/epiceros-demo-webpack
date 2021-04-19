 const path = require('path');
 const HtmlPlugin = require('html-webpack-plugin');
 const MiniCssExtractPlugin = require('mini-css-extract-plugin');
 
 module.exports = {
   output: {
     path: path.join(__dirname, 'build'),
     filename: 'bundle.js' 
   },
   devServer: {
     port: 3000,
     watchContentBase: true,
     historyApiFallback: true,
   }, 
   module: {
     rules: [
       {
         test: /\.(js|jsx)$/,
         exclude: /node_modules/,
         use: { 
           loader: 'babel-loader'
         }
       },
       {
         test: /\.css$/,
         use: [MiniCssExtractPlugin.loader, 'css-loader']
       }
     ]
   },

   plugins: [
     new HtmlPlugin({
       filename: 'index.html',
       template: './src/index.html'
     }),
     new MiniCssExtractPlugin()
   ]
 }