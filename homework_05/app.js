const { Observable,from } = require('rxjs');
const { map } = require('rxjs/operators');
const { shareReplay } = require('rxjs/operators');

const express = require('express')
const axios = require('axios')
const app = express()

const port = 3000
const userURL = 'https://randomuser.me/api/?page=1&results=10';
const data = [];

//configuration
app.set('strict routing',true);
app.set('case senitive routing',true);
app.set('Cache-Control','private,max-age=86400');
app.set('trust proxy',true);
app.set('Link','<https://randomuser.me/api/?page=1&results=10>;rel="first"');

app.get('/', (req, res) => {
    res.send('Homework 5');
});

app.get('/users', (req, res) => {
    let dataSource = from(axios.get(userURL)).pipe(shareReplay(1));
    dataSource.subscribe(response => {
        res.set('Link','<https://randomuser.me/api/?page=1&results=10>;rel="first"');
        res.send(response.data);
    });
});

app.listen(port, () => console.log(`Homework 5 app listening on port ${port}!`))