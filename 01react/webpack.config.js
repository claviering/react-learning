const path = require('path')
const HtmlWebpackPackPlugin = require('html-webpack-plugin')

const htmlPlugin = new HtmlWebpackPackPlugin({
  template: path.join(__dirname, './src/index.html'),
  filename: 'index.html'
})
module.exports = {
  mode: 'development',
  plugins: [
    htmlPlugin
  ],
  module: {
    rules: [
      {
        test: /\.js|jsx$/, 
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  }
}