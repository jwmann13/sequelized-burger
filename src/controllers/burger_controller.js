const express = require('express');

let router = express.Router();

let model = require('../models/burger_model');

router.get("/", (req, res) => {
    model.selectAll((data) => {
        let hbsObj = {
            burgers: data
        }
        res.render("index", hbsObj)
    })
});

router.get("/api/burgers", (req, res) => {
    model.selectAll((data) => {
        res.json(data);
    })
})

router.post("/api/burgers", (req, res) => {
    model.insertOne([req.body.burger_name, req.body.devoured], (data) => {
        res.json(data)
    })
})

router.put("/api/burgers/:id", (req, res) => {
    model.updateOne('devoured', 'id', req.params.id, req.body.devoured, function (data) {
        console.log(data);
        if (data.changedRows == 0 ) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
})

router.delete("/api/burgers/:id", (req, res) => {
    model.deleteOne('id', req.params.id, function (data) {
        if (data.affectedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;