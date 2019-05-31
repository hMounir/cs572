const express = require('express')
const axios = require('axios')
const app = express()

const port = 3000
const userURL = 'https://randomuser.me/api/?results=10';

app.get('/', (req, res) => {
    res.send('Homework 5')
});

app.get('/', (req, res) => {
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