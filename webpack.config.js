const path = require('path');
//const { dirname } = require('path');

module.exports = {
  entry: {
    app: './src/app.js'
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },

  module: {
    rules: [{
    loader: 'babel-loader',
      test: /\.js$/, // include .js files
      exclude: /node_modules/ // exclude any and all files in the node_modules folder
    }, {
      test: /\.s?css$/,
      use: ['style-loader', 'css-loader', 'sass-loader']
    } 
  ]
  },

      //to see error with file name and line
      devtool: 'cheap-module-eval-source-map',
      //For dev-server

    devServer: {
        contentBase: path.join(__dirname, 'public'),  
        historyApiFallback: true,  
  }

};