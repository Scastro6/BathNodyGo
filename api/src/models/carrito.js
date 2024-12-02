import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";
import Usuario from "./usuario.js"; // Asegúrate de que el archivo modelo sea correcto

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
      field: "idusuario", // Mapeo correcto para la columna en la base de datos
      references: {
        model: Usuario, // Nombre del modelo de referencia
        key: "id",
      },
    },
  },
  {
    timestamps: false,
    tableName: "carritodecompra", // En minúsculas, tal como está en la base de datos
  }
);

CarritoDeCompra.belongsTo(Usuario, { foreignKey: "idUsuario" });

export default CarritoDeCompra;
