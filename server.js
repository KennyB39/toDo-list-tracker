const express = require("express");
const routes = require("./Routes");
const express = require('express');
const helpers = require('./utils/auth');
const app = express();
// add port
const PORT = process.env.PORT || 3000;


app.use(express.json());

app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
  });
