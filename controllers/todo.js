const Todo = require("../model/todoModel");

//get
const getTodos = (req, res) => {
  Todo.find()
    .then((todos) => {
      res.json(todos);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

//create
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
const updateTodo = (req, res) => {
  Todo.findOneAndUpdate(
    { _id: req.params.todoID },
    {
      $set: {
        title: req.body.title,
        description: req.body.description,
        completed: req.body.completed,
      },
    },
    { new: true } // This option returns the updated document
  )
    .then((updatedTodo) => {
      res.json(updatedTodo);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};
module.exports = {
  getTodos,
  createTodo,
  updateTodo,
};
