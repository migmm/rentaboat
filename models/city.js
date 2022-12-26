import { DataTypes } from "sequelize";
import { sequelize } from "../model/sequelize.js";
import { Harbour } from "./harbour.js"; 

export const City = sequelize.define(
    "city",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        cityName: {
            type: DataTypes.STRING,
        },
    },
    {
        freezeTableName: true,	
    },
);

City.hasMany(Harbour);
Harbour.belongsTo(City)
