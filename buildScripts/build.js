import webpack from 'webpack';
import chalk from 'chalk';
import webpackConfig from '../webpack.config.prod';

console.log(chalk.blue('Generating build for production mode...'));

/*eslint-disable no-console*/

webpack(webpackConfig).run((err, stats) => {
    if (err) {
        console.log(chalk.red(err));
        return 1;
    }
    else {
        const jsonStats = stats.toJson();

        if (jsonStats.hasErrors) {
            return jsonStats.errors.map(error => console.log(chalk.red(error)));
        }

        if (jsonStats.hasWarnings) {
            console.log(chalk.yellow('Webpack generated the following warnings: '));
            jsonStats.warnings.map(warning => console.log(chalk.yellow(warning)));
        }

        console.log(`Webpack stats: ${stats}`);

        // if we got this far, the build succeeded.
        console.log(chalk.green('Your app has been built for production and written to /dist!'));

        return 0;
    }
});