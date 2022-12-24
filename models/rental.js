import { DataTypes } from "sequelize";
import { sequelize } from "../model/sequelize.js";
import { Customer } from "./customer.js";
import { Boat_owner } from "./boat_owner.js"; 
import { Boat } from "./Boat.js";
import { City } from "./city.js";


export const Rental = sequelize.define(
    "rentals",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        available_date_from: {
            type: DataTypes.DATE,
        },
        available_date_to: {
            type: DataTypes.DATE,
        },
        available_captain: {
            type: DataTypes.BOOLEAN,
        },
        total_price: {
            type: DataTypes.FLOAT,
        },
    },
    {
        freezeTableName: true,	
    },
);

Boat_owner.belongsTo(Rental)
Rental.hasMany(Customer)
Customer.belongsTo(Rental)
Rental.hasMany(Boat)
Boat.belongsTo(Rental)
Rental.hasMany(City)
City.belongsTo(Rental)
