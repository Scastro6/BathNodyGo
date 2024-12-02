import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";
import Usuario from "./usuario.js";

const Orden = sequelize.define(
  "orden",
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
      field: "idusuario", // Mapea a la columna en la base de datos
      references: {
        model: Usuario,
        key: "id",
      },
    },
    fecha: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    total: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    subTotal: {
      type: DataTypes.DECIMAL(10, 2),
      field: "subtotal", // Mapea a la columna en la base de datos
    },
    metodoDeEntrega: {
      type: DataTypes.STRING(100),
      field: "metododeentrega", // Mapea a la columna en la base de datos
    },
    nroTarjeta: {
      type: DataTypes.STRING(20),
      field: "nrotarjeta", // Mapea a la columna en la base de datos
    },
    tipoTarjeta: {
      type: DataTypes.STRING(50),
      field: "tipotarjeta", // Mapea a la columna en la base de datos
    },
  },
  {
    timestamps: false,
    tableName: "orden", // Nombre de la tabla en la base de datos
  }
);

// Relación con Usuario
Orden.belongsTo(Usuario, { foreignKey: "idUsuario" });

export default Orden;
