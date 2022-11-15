const router = require("express").Router();
const apiRoutes = require("./api");
const homeRoutes = require("./homeRoutes.js");

router.get("/", async (req, res) => {
  try {
    res.status(200).sendFile(__dirname, "");
  } catch (err) {
    res.status(400).json(err);
  }
});

router.use("/api", apiRoutes);
router.use("/", homeRoutes);
module.exports = router;
