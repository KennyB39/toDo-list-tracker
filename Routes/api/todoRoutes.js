const router = require('express').Router();
const { Todo } = require('../../models');

// add new todo record
router.post('/', async (req, res) => {
  try {
    const newTodo = await Todo.create(req.body);
    res.status(200).json(newTodo);
  } catch (err) {
    res.status(400).json(err);
  }
});


module.exports = router;
