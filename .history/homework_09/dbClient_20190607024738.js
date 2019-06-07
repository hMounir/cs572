const express = require('express'); 
const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017/';
const DB_NAME = 'homework09';
const client = new MongoClient(url, { useNewUrlParser: true });
const app = express()
let DB = null;

// keep connection on request object

async function connect(req, res, next) {
    try {
        if (DB) {
            req.DB = DB;
        } else {
            await client.connect();
            DB = client.db(DB_NAME);
            req.DB = DB;
        }
        next()
    } catch (error) {
        console.log(error)
    }
}
 
module.exports = {connection : connect};