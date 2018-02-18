const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const router = require('./router.js')


app.use(express.static(path.join(__dirname, '../client/dist')));

const movies = [
    {title: 'Mean Girls', description: 'Most quoted movie of all time!'},
    {title: 'Hackers', description: 'A Hack Reactor documentary'},
    {title: 'The Grey', description: 'Liam Neeson fights a wolf'},
    {title: 'Sunshine', description: 'Something SF is missing'},
    {title: 'Ex Machina', description: 'Would rewatch this movie in a heartbeat'},
];

app.use(bodyParser.json());

app.use('/', router);


app.listen(3000, function () { console.log('MovieList app listening on port 3000!') });


