import { DataTypes } from "sequelize";
import { sequelize } from "../model/sequelize.js";


export const Boat_owner = sequelize.define(
    "boat_owners",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        owner_name: {
            type: DataTypes.STRING,
        },
        owner_mail: {
            type: DataTypes.STRING,
        },
        owner_phone: {
            type: DataTypes.STRING,
        },
    },
    {
        timestamps: false,
    },
);
