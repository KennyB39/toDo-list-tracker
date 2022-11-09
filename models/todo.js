const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class toDo extends Model {}

toDo.init(
    {
    toDo: {
        type: DataTypes.STRING,
        primaryey: false,
        allowNull: false,
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'user',
            key: 'id',
        },
    },
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'toDo',
    }
  );
  
  module.exports = toDo;