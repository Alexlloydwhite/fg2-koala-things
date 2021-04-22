const { Router } = require('express');
const express = require('express');
const koalaRouter = express.Router();

// DB CONNECTION


// GET
router.get('/', (req, res) => {
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
router.post('/', (req, res) => {
    let newKoala = req.body;
    console.log('Adding Koala', newKoala);

    let queryText = `INSERT INTO "koala-DB" ("name", "age", "gender", "ready_to_transfer", "notes")
                    VALUES ($1, $2, $3, $4, $5);`;
    pool.query(queryText, [newKoala.name, newKoala.age, newKoala.gender, newKoala.ready_to_transfer, newKoala.notes])
        .then(result => {
            res.sendStatus(201);
        })
        .catch(error => {
            console.log('Error adding new Koala', error);
            res.sendStatus(500);
        });
});

// PUT
router.put('/isReady/;id', (req, res) => {
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

module.exports = koalaRouter;