import webpack from 'webpack';
import chalk from 'chalk';
import webpackConfig from '../webpack.config.prod';

console.log(chalk.blue('Generating build for production mode...'));

/*eslint-disable no-console*/

webpack(webpackConfig).run((err) => {
    if (err) {
        console.log(chalk.red(err));
        return 1;
    }
    else {
        return 0;
    }
});