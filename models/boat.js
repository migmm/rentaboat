import { DataTypes } from "sequelize";
import { sequelize } from "../model/sequelize.js";
import { Boat_owner } from "./Boat_owner.js";
import { Cart } from "./cart.js";
import { Rental } from "./rental.js";

export const Boat = sequelize.define(
    "boat",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        boat_type: {
            type: DataTypes.STRING,
        },
        brand: {
            type: DataTypes.STRING,
        },
        model: {
            type: DataTypes.STRING,
        },
        year: {
            type: DataTypes.DATE,
        },
        capacity: {
            type: DataTypes.INTEGER,
        },
        description: {
            type: DataTypes.STRING,
        },
        length: {
            type: DataTypes.FLOAT,
        },
        price: {
            type: DataTypes.FLOAT,
        },
    },
    {
        freezeTableName: true,	
    },
);

Boat_owner.hasMany(Boat)
Boat.belongsTo(Boat_owner)

Cart.hasMany(Boat)
Boat.belongsTo(Cart)

Rental.hasMany(Boat)
Boat.belongsTo(Rental)