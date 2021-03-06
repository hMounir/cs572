const { Observable,from } = require('rxjs');
const { map } = require('rxjs/operators');

const express = require('express')
const axios = require('axios')
const app = express()

const port = 3000
const userURL = 'https://randomuser.me/api/?results=10';

app.get('/', (req, res) => {
    //emit array as a sequence of values
    const arraySource = from([1, 2, 3, 4, 5]);
    //output: 1,2,3,4,5
    const subscribe = arraySource.subscribe(val => console.log(val));
    res.send('Homework 5');
});

app.get('/users', (req, res) => {
    //emit result of promise
    const promiseSource = from(axios.get(userURL));
    const subscribe = promiseSource.subscribe(val => {
        console.log(val);
        res.send(response.data);
    });
    axios.get(userURL)
    .then(function (response) {
        // handle success
        console.log(response);
        
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