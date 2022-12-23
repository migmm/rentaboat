import { DataTypes } from "sequelize";
import { sequelize } from "../model/sequelize.js";
import { City } from "./city.js";

export const Country = sequelize.define(
    "countries",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        country_name: {
            type: DataTypes.STRING,
        },
    },
    {
        timestamps: false,
    },
);

/* Country.hasMany(City); 
 */