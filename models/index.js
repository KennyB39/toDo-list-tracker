const user = require("./user");
const toDo = require("./toDo");

user.hasMany(toDo, {
  foreignKey: "user_id",
});

toDo.belongsTo(user, {
  foreignKey: "user_id",
});

module.exports = { User, toDo };