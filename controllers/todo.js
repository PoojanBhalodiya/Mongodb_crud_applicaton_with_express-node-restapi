const Todo = require("../model/todoModel");

const getTodos = (req, res) => {
  Todo.find()
    .then((todos) => {
      res.json(todos);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
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
