const router = require("express").Router();
const apiRoutes = require("./api");

router.get('/', async (req, res) => {
    try {
      
      res.status(200).sendFile(__dirname, "");
    } catch (err) {
      res.status(400).json(err);
    }
  });
  

router.use("/api", apiRoutes);

module.exports = router;
