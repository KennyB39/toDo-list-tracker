const express = require("express");
const routes = require("./Routes");

const app = express();
// add port

app.use(express.json());

app.use(routes);

app.listen(3000, () => console.log("Now listening"));
