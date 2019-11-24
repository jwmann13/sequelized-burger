const express = require('express');
const exphbrs = require('express-handlebars')
require('dotenv').config();

const PORT = process.env.PORT || 8000;

let app = express();

let db = require('./models')

app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());
app.use(express.static("./public"));

app.engine("handlebars", exphbrs({
  defaultLayout: "main"
}));
app.set("view engine", "handlebars");

let routes = require('./controllers/burger_controller');

app.use(routes);

db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});