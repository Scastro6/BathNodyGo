import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";
import CarritoDeCompra from "./carrito.js";
import Producto from "./producto.js";

const ItemDeCarrito = sequelize.define(
    "itemDeCarrito",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      idCarrito: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: CarritoDeCompra,
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
      tableName: "itemDeCarrito",
    }
  );
  
  ItemDeCarrito.belongsTo(CarritoDeCompra, { foreignKey: "idCarrito" });
  ItemDeCarrito.belongsTo(Producto, { foreignKey: "idProducto" });
  
  export default ItemDeCarrito;