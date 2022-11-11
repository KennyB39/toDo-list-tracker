const router = require('express').Router();
const todoRoutes = require('./todoRoutes');
const userRoutes = require('./userRoutes');

router.use("/user", userRoutes);
// add todo routes

module.exports = router;