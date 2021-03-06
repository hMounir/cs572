const express = require('express');
// mongodb connection
const { connection } = require('./dbClient');

const app = express();
const port = 3000;

// mongodb connection
app.use(connection);

app.get('/', (req, res) => res.send('Hello App!'))

app.listen(port, () => console.log(`App listening on port ${port}!`))