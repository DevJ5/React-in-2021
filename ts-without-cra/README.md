```bash
# webpack and the cli
yarn add --dev webpack webpack-cli
# html plugin
yarn add --dev html-webpack-plugin
# Create a webpack.config.js
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
    }),
  ],
};

# Run webpack for production. This creates a dist folder with index.html and main.js
yarn run webpack --mode production

# Get the webpack-dev-server (its a seperate package)
yarn add --dev webpack-dev-server

# Run the devserver
yarn run webpack-dev-server --open --mode development
```
