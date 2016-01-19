import path from 'path';
import express from 'express';
import webpack from 'webpack';
import config from './webpack.config.js';

const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', (request, response) => {
  response.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3000, 'localhost', (error) => {
  if (error) {
    console.error(error); //eslint-disable-line
    return;
  }

  console.log('Listening at http://localhost:3000'); //eslint-disable-line
});
