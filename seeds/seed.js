const sequelize = require("../config/connection");
const { user, toDo } = require("../models");

const toDoData = require("./toDoData.json");
const userData = require("./userData.json");

const seedDataBase = async () => {
  await sequelize.sync({ force: true });

  const user = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

    const todo = await todo.bulkCreate(todoData, {
      individualHooks: true,
      returning: true,
    });

  process.exit(0);
};

seedDataBase();
