import { DataTypes } from "sequelize";
import { sequelize } from "../model/sequelize.js";
import { City } from "./city.js";

export const Country = sequelize.define(
    "country",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        countryName: {
            type: DataTypes.STRING,
        },
    },
    {
        freezeTableName: true,	
    },
);

Country.hasMany(City); 
City.belongsTo(Country)
