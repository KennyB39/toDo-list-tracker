const router = require("express").Router();
const { Todo, User } = require("../models");
const withAuth = require("../utils/auth");
//const path = require("path");


//-------------PreHandle bars------------------------------
// res.sendFile(path.join(__dirname, "../public/login.html"));

//GET route is for login page
// router.get("/", (req, res) => {
//   if (req.session.logged_in) {
//     res.redirect("/");
//     return;
//   }
//   res.sendFile(path.join(__dirname, "../public/login.html"));
// });

router.get('/', async (req, res) => {
  try {
    // Get all todos
    const todoData = await Todo.findAll({
      include: [
        {
          model: User,
          attributes: ['email'],
        },
      ],
    });

    // Serialize data so the template can read it
    const todos = todoData.map((todo) => todo.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('todo', { 
      todos, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/todo/:id', async (req, res) => {
  try {
    const todoData = await Todo.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['email'],
        },
      ],
    });

    const todo = todoData.get({ plain: true });

    res.render('todo', {
      ...todo,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


// ----------------Pre-HandleBARS---------------------------
// router.get('/new-user', async (req, res) => {
//   try {
//     res.sendFile(path.join(__dirname, "../public/login.html"),           
//           );
//   } catch (err) {
//       console.log(err)
//       res.status(500).json(err)
//   }
// });
// module.exports = router;

// Use withAuth middleware to prevent access to route
router.get('/todo', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Todo }],
    });

    const user = userData.get({ plain: true });

    res.render('todo', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


// Use withAuth middleware to prevent access to route
router.get('/todo', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Project }],
    });

    const user = userData.get({ plain: true });

    res.render('todo', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/todo');
    return;
  }

  res.render('login');
});

module.exports = router;