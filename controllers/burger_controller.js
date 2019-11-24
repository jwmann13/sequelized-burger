const express = require('express');

let router = express.Router();

let db = require('../models');

router.get("/", (req, res) => {
    // db.Burger.findAll({}).then((dbburger) => {
    //     res.json(dbburger)
    // })
});

router.get("/api/burgers", (req, res) => {
    db.burgers.findAll({}).then((dbBurger) => {
        res.json(dbBurger);
    });
})

router.post("/api/burgers", (req, res) => {
    
})

router.put("/api/burgers/:id", (req, res) => {
    
})

router.delete("/api/burgers/:id", (req, res) => {
    
});

module.exports = router;