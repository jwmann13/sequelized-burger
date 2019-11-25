const express = require('express');

let router = express.Router();

let db = require('../models');

router.get("/", (req, res) => {
    db.burgers.findAll({}).then((dbBurger) => {
        // console.log(dbBurger)

        res.render("index", {
            dbBurger
        });
    })
});

router.get("/api/burgers", (req, res) => {
    db.burgers.findAll({}).then((dbBurger) => {
        res.json(dbBurger);
    });
})

router.post("/api/burgers", (req, res) => {
    db.burgers.create({
        burger_name: req.body.burger_name,
        devoured: req.body.devoured
    }).then((dbBurger) => {
        res.json(dbBurger)
    })
})

router.put("/api/burgers/:id", (req, res) => {
    db.burgers.update({
        devoured: req.body.devoured
    }, {
        where: {
            id: req.params.id
        }
    }).then((dbBurger) => {
        res.json(dbBurger);
    });
})

router.delete("/api/burgers/:id", (req, res) => {
    db.burgers.destroy({
        where: {
            id: req.params.id
        }
    }).then((dbBurger) => {
        res.json(dbBurger);
    });
});

module.exports = router;