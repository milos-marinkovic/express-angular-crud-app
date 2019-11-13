const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const routes = require('./api/routes');

const connection = mysql.createConnection({
  host:       'localhost',
  user:       'test',
  password:   'password',
  database:   'intelisale_akademija'
});

connection.connect();

const port = process.env.PORT || 3000;

const app = express()
            .use(cors())
            .use(bodyParser.json())
            .use(routes(connection));

app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});
