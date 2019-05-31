const { Observable,from } = require('rxjs');
const { map } = require('rxjs/operators');

const express = require('express')
const axios = require('axios')
const app = express()

const port = 3000
const userURL = 'https://randomuser.me/api/?results=10';

app.get('/', (req, res) => {
    res.send('Homework 5');
});

app.get('/users', (req, res) => {
    from(axios.get(userURL)).subscribe(val => {
        console.log(val);
        res.send(response.data);
    });
});

app.listen(port, () => console.log(`Homework 5 app listening on port ${port}!`))