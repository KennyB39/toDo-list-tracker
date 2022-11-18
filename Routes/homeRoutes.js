const router = require("express").Router();
const { Todo, User } = require("../models");
const withAuth = require("../utils/auth");
const path = require("path");


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
    // Get all projects and JOIN with user data
    const todoData = await Todo.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    // Serialize data so the template can read it
    const todos = todoData.map((todo) => todo.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('homepage', { 
      todo, 
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

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

module.exports = router;