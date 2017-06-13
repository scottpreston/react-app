var path = require('path');

module.exports = {
  entry: './src/app.js',
  module: {
    rules: [
        {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: [{
          loader: 'babel-loader',
          options: { presets: ['es2015','react'] },
        }],
      },
    
      // Loaders for other file types can go here
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
};