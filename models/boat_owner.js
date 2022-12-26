import { DataTypes } from "sequelize";
import { sequelize } from "../model/sequelize.js";
import { Boat } from "./boat.js"; 
 
export const Boat_owner = sequelize.define(
    "boat_owner",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        ownerName: {
            type: DataTypes.STRING,
        },
        ownerMail: {
            type: DataTypes.STRING,
        },
        ownerPhone: {
            type: DataTypes.STRING,
        },
        ownerStatus: {
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

Boat.hasMany(Boat_owner)
Boat_owner.belongsTo(Boat)
