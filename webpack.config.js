const path = require('path');
//const { dirname } = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

//for change the database environment(ex. development, test, production)


process.env.NODE_ENV = process.env.NODE_ENV || 'development';

if (process.env.NODE_ENV === 'test') {
  require('dotenv').config({ path: '.env.test' });
} else if (process.env.NODE_ENV === 'development') {
  require('dotenv').config({ path: '.env.development' });
}

module.exports = (env) => {
  const isProduction = env === 'production';
  const CSSExtract = new ExtractTextPlugin('styles.css');

  console.log('env', env);
  //console.log(process.env.NODE_ENV);
  return {
    entry: ['babel-polyfill', './src/app.js'],
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
      plugins: [ 
        CSSExtract,
        new webpack.DefinePlugin({
          'process.env.FIREBASE_API_KEY':JSON.stringify(process.env.FIREBASE_API_KEY),
          'process.env.FIREBASE_AUTH_DOMAIN':JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
          'process.env.FIREBASE_DATABASE_URL':JSON.stringify(process.env.FIREBASE_DATABASE_URL),
          'process.env.FIREBASE_PROJECT_ID':JSON.stringify(process.env.FIREBASE_PROJECT_ID),
          'process.env.FIREBASE_STORAGE_BUCKET':JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
          'process.env.FIREBASE_MESSAGING_SENDER_ID':JSON.stringify(process.env.FIREBASE_MESSAGING_SENDER_ID),
          'process.env.FIREBASE_APP_ID':JSON.stringify(process.env.FIREBASE_APP_ID),
          'process.env.FIREBASE_MEASUREMENT_ID':JSON.stringify(process.env.FIREBASE_MEASUREMENT_ID),
        })
      
      ],
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