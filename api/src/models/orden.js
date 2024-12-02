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
    },
    metodoDeEntrega: {
      type: DataTypes.STRING(100),
    },
    nroTarjeta: {
      type: DataTypes.STRING(20),
    },
    tipoTarjeta: {
      type: DataTypes.STRING(50),
    },
  },
  {
    timestamps: false,
    tableName: "orden",
  }
);

Orden.belongsTo(Usuario, { foreignKey: "idUsuario" });

export default Orden;
