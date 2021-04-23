const { Router } = require('express');
const express = require('express');
const koalaRouter = express.Router();


// DB CONNECTION
const pg = require('pg');

const config = {
    database: 'Koala',
    host: 'localhost',
    port: 5432,
    max: 10,
    idleTimeoutMillis: 30000,
}

const pool = new pg.Pool(config);

pool.on("connect", () => {
    console.log("connected to postgres");
});

pool.on("error", (err) => {
    console.log("Error connecting to postgres", err);
});

// GET
koalaRouter.get('/', (req, res) => {
    let queryText = 'SELECT * FROM "koala-DB";';
    pool.query(queryText).then(result => {
        res.send(result.rows);
    })
    .catch(error => {
        console.log('Error getting koalas', error);
        res.sendStatus(500);
    });
});

// POST
koalaRouter.post('/', (req, res) => {
    let newKoala = req.body;
    console.log('Adding Koala', newKoala);

    if ( newKoala.readyForTransfer === 'true') {
        newKoala.readyForTransfer = true;
        console.log(newKoala.readyForTransfer);
    } 
    if (  newKoala.readyForTransfer === 'false') {
       newKoala.readyForTransfer = false;
       console.log(newKoala.readyForTransfer);
    }

    let queryText = `INSERT INTO "koala-DB" ("name", "age", "gender", "ready_to_transfer", "notes")
                    VALUES ($1, $2, $3, $4, $5);`;
    pool.query(queryText, [newKoala.name, newKoala.age, newKoala.gender, newKoala.readyForTransfer, newKoala.notes])
        .then(result => {
            res.sendStatus(201);
        })
        .catch(error => {
            console.log('Error adding new Koala', error);
            res.sendStatus(500);
        });
});

// PUT
koalaRouter.put('/ready_to_transfer/:id', (req, res) => {
    let koalaId = req.params.id;
    let boolean = req.body.boolean;
    let sqlText = '';
    if (boolean === 'true') {
        sqlText = `UPDATE "koala-DB" SET "ready_to_transfer"=true WHERE "id"=$1;`;
    }
    else {
        res.sendStatus(500);
        return;
    }
    pool.query(sqlText, [koalaId]).then((resDB) => {
        res.sendStatus(200);
    })
    .catch((error) => {
        console.log('Error with request', error);
        res.sendStatus(500);
    });
});

// DELETE
koalaRouter.delete('/:id', (req, res) => {
    let reqId = req.params.id;
    console.log('Delete request id', reqId);

    let sqlText = 'DELETE FROM "koala-DB" WHERE "id"=$1;';
    pool.query(sqlText, [reqId])
    .then((result) => {
        console.log('Koala deleted');
        res.sendStatus(200);
    })
    .catch((error) => {
        console.log(`Error making database query ${sqlText}`, error);
        res.sendStatus(500);
    })
})


module.exports = koalaRouter;