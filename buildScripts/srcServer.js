import express from 'express';
import path from 'path';
import chalk from 'chalk';
import webpack from 'webpack';
import config from '../webpack.config.dev';

const port = '3001';
const app = express();
const compiler = webpack(config);

/*eslint-disable no-console*/

//middleware to tell the express to use webpack
app.use(require('webpack-dev-middleware')(compiler, {
    ngInfo: true,
    publicPath: config.output.publicPath
}));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.get('/products', (req, res) => {
    let products = [
        {
            "name": "Dell Vostro 3568 (Z553505UIN9) (Core i3 -6th Gen /4 GB RAM/ 1 TB HDD/ 39.6 cm (15.6) /Linux) (Black)",
            "category": "electronics",
            "desc": "Dell Vostro 3568 (Z553505UIN9) (Core i3 -6th Gen /4 GB RAM/ 1 TB HDD/ 39.6 cm (15.6) /Linux) (Black)",
            "price": 35488,
            "quantity": 5
        },
        {
            "name": "Dell Inspiron 3567 (Core i3 (6th Gen)/4 GB DDR4/1 TB/15.6\" (39.6 cm)/Linux) (Black)",
            "category": "electronics",
            "desc": "Dell Inspiron 3567 (Core i3 (6th Gen)/4 GB DDR4/1 TB/15.6\" (39.6 cm)/Linux) (Black)",
            "price": 31990,
            "quantity": 5
        },
        {
            "name": "Dell Inspiron 15-3567 Laptop (Intel Core i3 (6th Gen)/4GB RAM/1 TB HDD/ 15.6 (39.62 cm)/Windows 10) (Black)",
            "category": "electronics",
            "desc": "Dell Inspiron 15-3567 Laptop (Intel Core i3 (6th Gen)/4GB RAM/1 TB HDD/ 15.6 (39.62 cm)/Windows 10) (Black)",
            "price": 38997,
            "quantity": 5
        }];
    res.send(products);
});

app.listen(port, (err) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log(chalk.blue('server running at - http://localhost:' + port));
    }
});