import { DataTypes } from "sequelize";
import { sequelize } from "../model/sequelize.js";

export const Customer = sequelize.define(
    "customer",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        customer_name: {
            type: DataTypes.STRING,
        },
        customer_mail: {
            type: DataTypes.STRING,
        },
        customer_phone: {
            type: DataTypes.STRING,
        },
    },
    {
        freezeTableName: true,	
    },
);
