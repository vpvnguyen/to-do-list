// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("../models");

// Routes
// =============================================================
module.exports = function (app) {

  // GET route for getting all of the todos
  app.get("/api/todos", function (req, res) {
    // Write code here to retrieve all of the todos from the database and res.json them
    // back to the user
    db.Todo.findAll({})
      .then((data) => { res.json(data) })
      .catch((err) => { res.status(400).json({ err: err, message: err.message }) });
  });

  // POST route for saving a new todo. We can create todo with the data in req.body
  app.post("/api/todos", function (req, res) {
    // Write code here to create a new todo and save it to the database
    // and then res.json back the new todo to the user

    // var Todo = _.pick(req.body, ['text','complete'])
    db.Todo.create(req.body) // drop Todo in place of req.body
      .then((data) => { res.json(data) })
      .catch((err) => { res.status(400).json({ err: err, message: err.message }) })

  });

  // DELETE route for deleting todos. We can get the id of the todo to be deleted from
  // req.params.id
  app.delete("/api/todos/:id", (req, res) => {
    db.Todo.destroy({
      where: {
        id: req.params.id
      }
    }).then((data) => { res.json(data) }).catch((err) => { throw err })
  });

  // PUT route for updating todos. We can get the updated todo data from req.body
  app.put("/api/todos", (req, res) => {
    db.Todo.update({
      text: req.body.text
    }, {
        where: {
          id: req.body.id
        }
      }).then((data) => { res.json(data) }).catch((err) => { throw err })
  });
};
