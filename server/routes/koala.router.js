const express = require('express');
const koalaRouter = express.Router();

// DB CONNECTION
const pg = require('pg');
const Pool = pg.Pool;
const pool = new Pool({
    database: 'koala-DB',
    host: 'localhost',
    port: '5432',
    max: '10',
    idleTimeoutMillis: 30000
});

pool.on('connect', () => {
    console.log('Postgresql, Eugalize Legalyptus!');
});

// handle errors from the DB
pool.on('error', error => {
    console.log('Error with postgres pool!', error);
});

// GET


// POST


// PUT


// DELETE

module.exports = koalaRouter;