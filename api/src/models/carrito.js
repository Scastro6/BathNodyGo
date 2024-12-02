import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";
import Usuario from "./Usuario.js";

const CarritoDeCompra = sequelize.define(
  "carritoDeCompra",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    idUsuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Usuario,
        key: "id",
      },
    },
  },
  {
    timestamps: false,
    tableName: "carritoDeCompra",
  }
);

CarritoDeCompra.belongsTo(Usuario, { foreignKey: "idUsuario" });

export default CarritoDeCompra;