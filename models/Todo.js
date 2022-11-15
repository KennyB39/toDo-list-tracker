const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class Todo extends Model {}

Todo.init(
  {
    toDo: {
      type: DataTypes.TEXT,
      primaryKey: false,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "Todo",
  }
);

module.exports = Todo;
