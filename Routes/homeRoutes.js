const router = require('express').Router();
const { Todo, User } = require('../models');
const withAuth = require('../utils/auth');

//GET route is for login page
router.get("/", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }
  res.render("login");
});


