const Todo = require("../model/todoModel");

const getTodos = (req, res) => {
  res.send("I am the get todos route");
};

const createTodo = (req, res) => {
  const todo = new Todo({
    title: req.body.title,
    description: req.body.description,
    completed: req.body.completed,
  });

  todo
    .save()
    .then((savedTodo) => {
      res.json(savedTodo);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};

module.exports = {
  getTodos,
  createTodo,
};
