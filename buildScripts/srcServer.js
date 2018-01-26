import express from 'express';
import path from 'path';
import chalk from 'chalk';
import webpack from 'webpack';
import config from '../webpack.config.dev';

const port = '3000';
const app = express();
const compiler = webpack(config);

/*eslint-disable no-console*/

//middleware to tell the express to use webpack
app.use(require('webpack-dev-middleware')(compiler, {
    ngInfo: true,
    publicPath: config.output.publicPath
}));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, function (err) {
    if (err) {
        console.log(err);
    }
    else {
        console.log(chalk.blue('server running at - http://localhost:' + port));
    }
});