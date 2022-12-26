import { DataTypes } from "sequelize";
import { sequelize } from "../model/sequelize.js";
import { Cart } from "./cart.js";
import { Rental } from "./rental.js";

export const Customer = sequelize.define(
    "customer",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        customerName: {
            type: DataTypes.STRING,
        },
        customerMail: {
            type: DataTypes.STRING,
        },
        customerPhone: {
            type: DataTypes.STRING,
        },
        customerStatus: {
            type: DataTypes.BOOLEAN,
        },
        statusReason: {
            type: DataTypes.STRING,
        },
    },
    {
        freezeTableName: true,	
    },
);

Customer.hasMany(Cart)
/* Customer.belongsTo(Cart) */

Customer.hasMany(Rental)
/* Customer.belongsTo(Rental) */