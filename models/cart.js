import { DataTypes } from "sequelize";
import { sequelize } from "../model/sequelize.js";

export const Cart = sequelize.define(
    "cart",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        dateFrom: {
            type: DataTypes.DATE,
        },
        dateTo: {
            type: DataTypes.DATE,
        },
        totalPrice: {
            type: DataTypes.FLOAT,
        },
        cartStatus: {
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


