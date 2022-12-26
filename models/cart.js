import { DataTypes } from "sequelize";
import { sequelize } from "../model/sequelize.js";
import { Boat_owner } from "./boat_owner.js"
import { Boat } from "./boat.js"
import { Customer } from "./customer.js"

export const Cart = sequelize.define(
    "cart",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        dateFrom: {
            type: DataTypes.DATE,
        },
        dateTo: {
            type: DataTypes.DATE,
        },
        totalPrice: {
            type: DataTypes.FLOAT,
        },
        cartStatus: {
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

Boat_owner.hasMany(Cart)
Cart.belongsTo(Boat_owner)

Boat.hasMany(Cart)
Cart.belongsTo(Boat)

Customer.hasMany(Cart)
Cart.belongsTo(Customer)
