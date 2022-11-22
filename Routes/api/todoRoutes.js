const router = require('express').Router();
const { Todo } = require('../../models');
const withAuth = require('../../utils/auth');

// add new todo record
router.post('/', async (req, res) => {
  try {
    const newTodo = await Todo.create({
      toDo: req.body.toDo,
      user_id: req.session.user_id
    });
    res.status(200).json(newTodo);
  } catch (err) {
    res.status(400).json(err);
  }
});


module.exports = router;
