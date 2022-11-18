const sequelize = require("../config/connection");
const { User, Todo } = require("../models");

const toDoData = require("./toDoData.json");
const userData = require("./userData.json");

const seedDataBase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const todos = await Todo.bulkCreate(toDoData, {
    returning: true,
  });

  process.exit(0);
};

seedDataBase();
