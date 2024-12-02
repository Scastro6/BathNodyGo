import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";
import Orden from "./orden.js";
import Producto from "./producto.js";

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
      references: {
        model: Orden,
        key: "id",
      },
    },
    idProducto: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Producto,
        key: "id",
      },
    },
  },
  {
    timestamps: false,
    tableName: "itemDeLaOrden",
  }
);

ItemDeLaOrden.belongsTo(Orden, { foreignKey: "idOrden" });
ItemDeLaOrden.belongsTo(Producto, { foreignKey: "idProducto" });

export default ItemDeLaOrden;