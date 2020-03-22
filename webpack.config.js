let path = require('path')
let HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
      filename: 'smartSDK.js',
      path: path.resolve(__dirname,'dist'),
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js'],
  },
  module: {
    rules: [
        {
            test:/\.js$/,
            use: {
                loader:'babel-loader',
                options: {
                    presets:[
                        '@babel/preset-env'
                    ],
                }
            }
        }
    ],
  },
  plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
        filename:'index.html',
        minify: {
          removeAttributeQuotes: true
        }
      })
  ],
}