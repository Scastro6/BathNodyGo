import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";
import Orden from "./orden.js";
import Producto from "./Producto.js";

const ItemDeLaOrden = sequelize.define(
  "itemDeLaOrden",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    idOrden: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "idorden", // Mapeo exacto a la columna en la base de datos
      references: {
        model: Orden, // Relación con la tabla Orden
        key: "id",
      },
    },
    idProducto: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "idproducto", // Mapeo exacto a la columna en la base de datos
      references: {
        model: Producto, // Relación con la tabla Producto
        key: "id",
      },
    },
  },
  {
    timestamps: false,
    tableName: "itemdelaorden", // Nombre exacto de la tabla en la base de datos
  }
);

// Relaciones
ItemDeLaOrden.belongsTo(Orden, { foreignKey: "idOrden" });
ItemDeLaOrden.belongsTo(Producto, { foreignKey: "idProducto" });

export default ItemDeLaOrden;
