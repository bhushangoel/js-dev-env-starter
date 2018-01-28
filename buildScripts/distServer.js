/*
 * This is a production server script, that will be used on the server to serve files from the dist folder.
 * We need to create this on to our local machine once and then it will be pushed to the production server.
 *
 * */

/*eslint-disable no-console*/
import express from 'express';
import path from 'path';
import chalk from 'chalk';
import compression from 'compression';

const port = '3001';
const app = express();

//enabling gzip compression
app.use(compression());
app.use(express.static('dist'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
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