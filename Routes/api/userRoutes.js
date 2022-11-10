const router = require('express').Router();
const { Todo, User } = require('../../models');


router.get ("/", (req, res) => {
  res.send ("api users")
})

router.post ("/", (req, res) => {
  res.send ("api post user")
})

router.get ("/:id", (req, res) => {
  res.send ("api user ID")
})
router.get ("/:id/todos",  (req, res) => {
  res.send ("api user ID todos")
  let id = req.params.id;
})

router.post ("/:id/todos", (req, res) => {
  res.send ("api post user ID todos")
})



module.exports = router;