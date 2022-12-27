import { DataTypes } from "sequelize";
import { sequelize } from "../model/sequelize.js";
import { Customer } from "./customer.js";

export const Avatar_customer = sequelize.define(
    "avatar_customer",
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

Customer.hasMany(Avatar_customer)
Avatar_customer.belongsTo(Customer)
