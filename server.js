const path = require("path")
const express = require("express");
const routes = require("./Routes");
const helpers = require('./utils/auth');
const app = express();
const sequelize = require("./config/connection");

// add port
const PORT = process.env.PORT || 3001;
app.use(express.static(path.join(__dirname, 'public')));
app.get ("/", (req, res) =>{
  res.sendFile(path.join(__dirname, 'public', 'login.html'));
 
})
app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
  });
