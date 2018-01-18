import express from 'express';
import path from 'path';
import chalk from 'chalk';

var port = '3000';

var app = express();

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