const path = require('path');
//const { dirname } = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (env) => {
  const isProduction = env === 'production';
  const CSSExtract = new ExtractTextPlugin('styles.css');

  console.log('env', env);
  return {
    entry: {
      app: './src/app.js'
    },
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'public', 'dist')
    },
  
    module: {
      rules: [{
      loader: 'babel-loader',
        test: /\.js$/, // include .js files
        exclude: /node_modules/ // exclude any and all files in the node_modules folder
      }, {
        test: /\.s?css$/,
        use: CSSExtract.extract({
          use: [
            { loader: 'css-loader', options: { sourceMap: true }}, 
            { loader: 'sass-loader', options: { sourceMap: true }}
          ]
        })
      } 
    ]
    
    },
      plugins: [ CSSExtract ],
        //to see error with file name and line
        devtool: isProduction ? 'source-map' : 'inline-source-map',
        //For dev-server
  
      devServer: {
          contentBase: path.join(__dirname, 'public'),  
          historyApiFallback: true,  
          publicPath: '/dist/'
  }
};

};