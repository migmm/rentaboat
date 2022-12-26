import { DataTypes } from "sequelize";
import { sequelize } from "../model/sequelize.js";
import { Rental } from "./rental.js";
import { Country } from "./country.js";

export const City = sequelize.define(
    "city",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        cityName: {
            type: DataTypes.STRING,
        },
    },
    {
        freezeTableName: true,	
    },
);

City.hasMany(Rental)

//City.hasMany(Rental)
//City.belongsTo(Rental)

Country.hasMany(City); 