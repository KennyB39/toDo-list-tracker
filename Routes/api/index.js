const router = require('express').Router();
const todoRoutes = require('./todoRoutes');
const userRoutes = require('./userRoutes');
//router uses user routes
router.use("/user", userRoutes);
//router uses todo routes
router.use("/todos", todoRoutes);

module.exports = router;