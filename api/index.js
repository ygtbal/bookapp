import express from 'express';
import bodyParser from 'body-parser';
// const v1Route = require('./v1/index');
import v1Route from './v1/index';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.PORT || 8000;

app.use('/v1', v1Route);

// WHEN A RANDOM ROUTE IS INPUTED
app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to this API.',
}));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// pg-hstore
// A node package for serializing and deserializing JSON data to hstore format.

// hstore -> This module implements the hstore data type for storing sets of key/value pairs within a single PostgreSQL value.



export default app;
