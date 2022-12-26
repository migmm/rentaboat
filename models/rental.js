import { DataTypes } from "sequelize";
import { sequelize } from "../model/sequelize.js";

export const Rental = sequelize.define(
    "rental",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        availableDate_from: {
            type: DataTypes.DATE,
        },
        availableDate_to: {
            type: DataTypes.DATE,
        },
        availableCaptain: {
            type: DataTypes.BOOLEAN,
        },
        totalPrice: {
            type: DataTypes.FLOAT,
        },
        rentalStatus: {
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



