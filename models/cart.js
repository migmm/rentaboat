import { DataTypes } from "sequelize";
import { sequelize } from "../model/sequelize.js";
import { Customer } from "./customer.js";
import { Boat_owner } from "./boat_owner.js"; 

export const Cart = sequelize.define(
    "cart",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        date_from: {
            type: DataTypes.DATE,
        },
        date_to: {
            type: DataTypes.DATE,
        },
        total_price: {
            type: DataTypes.FLOAT,
        },
    },
    {
        reezeTableName: true,	
    },
);

Cart.hasMany(Boat_owner)
Boat_owner.belongsTo(Cart)
Cart.hasMany(Customer)
Customer.belongsTo(Cart)

