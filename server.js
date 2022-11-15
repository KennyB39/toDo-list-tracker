const path = require("path")
const express = require("express");
const routes = require("./Routes");

const path = require("path");
const session = require("express-session");
const helpers = require("./utils/helpers");

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

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
=======
    app.listen(PORT, () => console.log('Now listening'));
  });

