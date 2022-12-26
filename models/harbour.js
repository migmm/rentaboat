import { DataTypes } from "sequelize";
import { sequelize } from "../model/sequelize.js";


export const Harbour = sequelize.define(
    "harbour",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        harbourName: {
            type: DataTypes.STRING,
        },
        statusStatus: {
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



