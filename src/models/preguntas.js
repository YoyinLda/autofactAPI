const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "id"
    },
    resp1: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "resp1"
    },
    resp2: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "resp2"
    },
    resp3: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "resp3"
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.fn('current_timestamp'),
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "created_at"
    },
    id_user: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: "created by",
      field: "id_user",
      references: {
        key: "id",
        model: "user"
      }
    }
  };
  const options = {
    tableName: "respuestas",
    comment: "",
    "timestamps": false,
    "underscored": true,
    "freezeTableName": true,
    defaultScope: {
      attributes: { exclude: ["created_at"] }
    },
    indexes: [{
      name: "respuestas_ibfk_1",
      unique: false,
      type: "BTREE",
      fields: ["id_user"]
    }]
  };
  const PreguntasModel = sequelize.define("preguntas", attributes, options);
  PreguntasModel.associate = models => {
    
  };
  return PreguntasModel;
};