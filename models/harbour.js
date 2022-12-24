import { DataTypes } from "sequelize";
import { sequelize } from "../model/sequelize.js";
import { Boat } from "./Boat.js";

export const Harbour = sequelize.define(
    "harbours",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        harbour_name: {
            type: DataTypes.STRING,
        },
    },
    {
        freezeTableName: true,	
    },
);

Harbour.hasMany(Boat);
