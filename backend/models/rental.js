import { DataTypes } from "sequelize";
import { sequelize } from "../model/sequelize.js";
import { Boat_owner } from "./boat_owner.js"
import { Boat } from "./boat.js"
import { Customer } from "./customer.js"

export const Rental = sequelize.define(
    "rental",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        availableDateFrom: {
            type: DataTypes.DATE,
        },
        availableDateTo: {
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

Boat_owner.hasMany(Rental)
Rental.belongsTo(Boat_owner)

Boat.hasMany(Rental)
Rental.belongsTo(Boat)

Customer.hasMany(Rental)
Rental.belongsTo(Customer)
