const { Observable } = require('rxjs');
const { from } = require('rxjs/operators');
const { map } = require('rxjs/operators');

const express = require('express')
const axios = require('axios')
const app = express()

const port = 3000
const userURL = 'https://randomuser.me/api/?results=10';

app.get('/', (req, res) => {
    // RXJS
    const myArray = [1, 2, 3];

    console.log('RxJS');
    const myObservable = from(myArray).map(o => `${o.toString()} + !!!`);
    myObservable.subscribe(o => console.log(o));
    res.send('Homework 5');
});

app.get('/users', (req, res) => {
    axios.get(userURL)
    .then(function (response) {
        // handle success
        console.log(response);
        res.send(response.data);
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .finally(function () {
        // always executed
    });
});

app.listen(port, () => console.log(`Homework 5 app listening on port ${port}!`))