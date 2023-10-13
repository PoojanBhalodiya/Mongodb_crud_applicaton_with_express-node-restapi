const router = require("express").Router();
const { getTodos } = require("../controllers/todo");

router.get("/", (req, res) => {
  res.send("Let's build a CRUD API!");
});

//getTodos
router.get("/todos", getTodos);

module.exports = router;
