const express = require('express');
const exphbrs = require('express-handlebars');
const path = require('path')
require('dotenv').config();

const PORT = process.env.PORT || 8000;

let app = express();

let db = require('./models')

app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.engine("handlebars", exphbrs({
  defaultLayout: "main",
  helpers: {
    ifeq: function(a, b, options){
      if (a == b) {
        return options.fn(this);
        }
      return options.inverse(this);
    },
    bar: function(){
      return "BAR!";
    }
  }
}));
app.set("view engine", "handlebars");

let routes = require('./controllers/burger_controller');

app.use(routes);

db.sequelize.sync({ force: false }).then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});