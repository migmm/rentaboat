import { DataTypes } from "sequelize";
import { sequelize } from "../model/sequelize.js";
import { Boat_owner } from "./boat_owner.js";

export const Avatar_boat_owner = sequelize.define(
    "avatar_boat_owner",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        avatarUrl: {
            type: DataTypes.STRING,
        },
    },
    {
        freezeTableName: true,	
    },
);

Boat_owner.hasMany(Avatar_boat_owner)
Avatar_boat_owner.belongsTo(Boat_owner)

