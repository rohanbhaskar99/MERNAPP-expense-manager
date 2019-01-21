//webpack.config.js
var path = require('path');
var webpack = require('webpack');

module.exports = {
 entry: './client/index.js',
 output: {
  path: path.join(__dirname, 'client'),
  filename: 'bundle.js'
  },
  module: {
   rules: [{
      test: /.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        presets: ['@babel/react', '@babel/es2015'],
        // plugins: ['@babel/proposal-class-properties']
      }
     },
     {
      test: /\.css$/,
      loader: "style-loader!css-loader"
     }]
  }

}

// module: {
//   rules: [
//     { test: /\.jsx$/, loader: 'babel-loader', exclude: }
//   ]
//   },
//   output: {
//   filename: 'bundle.js',
//   path: path.resolve(__dirname, 'dist')
//   }
// }
