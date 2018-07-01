Stages of setup:

npm i webpack --save-dev --> using Webpack to manage bundle.

npm i webpack-cli --save-dev --> adds scaffold to Webpack to make is easier for begginers to use

add Webpack to package.json --> 

"scripts": {
  "build": "webpack --mode production"
}

npm i babel-loader babel-core babel-preset-env babel-preset-react --save-dev -->

babel-loader --> webpack loader, allows browser to understand ES6
babel-core --> 
babel-preset-env --> compile ES6 to ES5
babel-preset-react --> compile JSX to Javascript

Create .babelrc and configure -->

{
  "presets": ["env", "react"]
}

Create file webpack.config.js --> tells webpack to run .js files through babel-loader.

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};

npm i react react-dom --save-dev --> react and react-dom

touch src/app.js

<!-- Webpack entry point is index.js -->
touch src/index.js -->

import App from "./App";

npm run build

<!-- Webpack requirementst process HTML -->
npm i html-webpack-plugin html-loader --save-dev

<!-- Update Webpack -->
const HtmlWebPackPlugin = require("html-webpack-plugin");
module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
};

touch src/index.html -->

<!-- change class names below -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" >
    <title>App</title>
</head>
<body>
    <div class="container">
        <div class="row mt-5">
            <div class="col-md-4 offset-md-1">
                <p></p>
                <div id="create-app">
                    <!-- app -->
                </div>
            </div>
        </div>
    </div>
</body>
</html>

App.js --> at bottom of file

const wrapper = document.getElementById("create-app");
wrapper ? ReactDOM.render(<App />, wrapper) : false;

npm run build

<!-- set up dev server, browser auto updated when file is changed -->
npm i webpack-dev-server --save-dev

package.json -->

"scripts": {
  "start": "webpack-dev-server --open --mode development",
  "build": "webpack"
}

npm start


npm install --save-dev jest

package.json -->

"test": "jest",

touch src/test.js

npm i --save-dev enzyme enzyme-adapter-react-16