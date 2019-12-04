# Burger Time

## Getting Started

### Access

This application is deployed to heroku at https://gentle-journey-24761.herokuapp.com/

To view the source code clone this repo:

''' git clone git@github.com:jwmann13/sequelized-burger.git ```

or fork the repository

### Dependencies

The application uses node packages:
* dotenv
* sequelize
* mysql2
* express
* express-handlebars

## Features

Burger Time demonstrates basic CRUD functionality with a MySQL relational database.

Two Sequelize models, a Burger and a Customer, are related with one burger belonging to many customers. A form at the bottom of the page allows the user to name a burger and it will appear in a line item on the page with two buttons to "devour" the burger or "delete" it. When it is devoured a boolean value changes and moves the line item from the left to the right side of the page. If a customer name is input into the "Customer Name" text input it will appear at the bottom of the line item declaring that the customer ate that burger.

## Authors

* __Jeffrey Mann__ - all contributions

## License

This project is licensed under the MIT License

Copyright 2019 Jeffrey Mann

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.