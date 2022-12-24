import { DataTypes } from "sequelize";
import { sequelize } from "../model/sequelize.js";
import { Harbour } from "./harbour.js";
import { Boat } from "./Boat.js";

export const City = sequelize.define(
    "city",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        city_name: {
            type: DataTypes.STRING,
        },
    },
    {
        freezeTableName: true,	
    },
);

City.hasMany(Harbour);
City.hasMany(Boat);
