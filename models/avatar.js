import { DataTypes } from "sequelize";
import { sequelize } from "../model/sequelize.js";
import { Boat_owner } from "./boat_owner.js";
import { Customer } from "./customer.js";

export const Avatar = sequelize.define(
    "avatars",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        avatar_url: {
            type: DataTypes.STRING,
        },
    },
    {
        freezeTableName: true,	
    },
);

Boat_owner.hasMany(Avatar)
Avatar.belongsTo(Boat_owner)
Customer.hasMany(Avatar)
Avatar.belongsTo(Customer)
