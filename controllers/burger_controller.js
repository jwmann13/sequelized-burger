const express = require('express');

let router = express.Router();

let db = require('../models');

router.get("/", (req, res) => {
    db.Burger.findAll({}).then((dbBurger) => {
        db.Customer.findAll({}).then((dbCustomer) => {
            res.render("index", {
                dbBurger,
                dbCustomer
            });
            // console.log(dbBurger, dbCustomer)
        });
    });
});

// API routes

router.get("/api/burgers", (req, res) => {
    db.Burger.findAll({}).then((dbBurger) => {
        res.json(dbBurger);
    });
})

router.post("/api/burgers", (req, res) => {
    db.Burger.create({
        burger_name: req.body.burger_name,
        devoured: req.body.devoured
    }).then((dbBurger) => {
        res.json(dbBurger)
    })
})

router.put("/api/burgers/", (req, res) => {
    db.Burger.update({
        devoured: req.body.devoured
    }, {
        where: {
            id: req.body.id
        }
    }).then((dbBurger) => {
        res.json(dbBurger);
    });
})

router.delete("/api/burgers/:id", (req, res) => {
    db.Burger.destroy({
        where: {
            id: req.params.id
        }
    }).then((dbBurger) => {
        res.json(dbBurger);
    });
});

// Customer API routes

router.post("/api/customer/", (req, res) => {
    db.Customer.create({
        name: req.body.name,
        BurgerId: req.body.BurgerId
    }).then(dbCustomer => {
        res.json(dbCustomer);
    })
})

module.exports = router;