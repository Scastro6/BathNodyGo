import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Usuario = sequelize.define(
  "usuario",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    nombredeusuario: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    nombre: {
      type: DataTypes.STRING(255),
    },
    apellido: {
      type: DataTypes.STRING(255),
    },
    direccion: {
      type: DataTypes.STRING(255),
    },
    ciudad: {
      type: DataTypes.STRING(100),
    },
    telefono: {
      type: DataTypes.STRING(15),
    },
  },
  {
    timestamps: false,
    tableName: "usuario",
  }
);

export default Usuario;