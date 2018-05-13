const webpack = require('webpack');
const config = require('./webpack.config.js');
const compiler = webpack(config);
const middleware = require('webpack-dev-middleware');
const express = require('express');
const app = express();

app.use('/', express.static(__dirname + '/public'));

app.use(middleware(compiler, {
    publicPath: '/'
}));

app.listen(3000, () => console.log('Example app listening on port 3000!'))