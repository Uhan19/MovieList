const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const router = require('./router.js')


app.use(express.static(path.join(__dirname, '../client/dist')));

app.use(bodyParser.json());

app.use('/', router);


app.listen(3000, function () { console.log('MovieList app listening on port 3000!') });


