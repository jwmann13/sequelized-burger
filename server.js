const express = require('express');
const exphbrs = require('express-handlebars')
require('dotenv').config();

const PORT = process.env.PORT || 8000;

let app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbrs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

let routes = require('./src/controllers/burger_controller');

app.use(routes);

app.listen(PORT, (err) => {
    if (err) throw err;

    console.log("app listening on http://localhost:" + PORT);
})