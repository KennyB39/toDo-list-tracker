const router = require('express').Router();
const { User } = require('../../models');


// User Login
router.post("/login", async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });
    if (!userData) {
      res
        .status(400)
        .json({ message: "Email or password do not match a record" });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Email or password do not match a record" });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.json({ user: userData, message: "Login successful" });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});


// Create new user
router.post("/", async (req, res) => {
  try {
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

//
// Route tests..............................................
// router.get ("/", (req, res) => {
//   res.send ("api users")
// })

// router.post ("/", (req, res) => {
//   res.send ("api post user")
// })

// router.get ("/:id", (req, res) => {
//   res.send ("api user ID")
// })
// router.get ("/:id/todos",  (req, res) => {
//   res.send ("api user ID todos")
//   let id = req.params.id;
// })

// router.post ("/:id/todos", (req, res) => {
//   res.send ("api post user ID todos")
// })



module.exports = router;