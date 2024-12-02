import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";
import CarritoDeCompra from "./carrito.js";
import Producto from "./Producto.js";

const ItemDeCarrito = sequelize.define(
  "itemdecarrito", // Nombre del modelo
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
      field: "idcarrito", // Mapeo del nombre de columna en la base de datos
      references: {
        model: CarritoDeCompra, // Relación con CarritoDeCompra
        key: "id",
      },
    },
    idProducto: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "idproducto", // Mapeo del nombre de columna en la base de datos
      references: {
        model: Producto, // Relación con Producto
        key: "id",
      },
    },
  },
  {
    timestamps: false,
    tableName: "itemdecarrito", // Nombre de la tabla en la base de datos
  }
);

// Relación con CarritoDeCompra
ItemDeCarrito.belongsTo(CarritoDeCompra, { foreignKey: "idCarrito" });

// Relación con Producto
ItemDeCarrito.belongsTo(Producto, { foreignKey: "idProducto" });

export default ItemDeCarrito;
