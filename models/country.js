import { Model, Sequelize, DataTypes } from "sequelize";
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
        country_name: {
            type: DataTypes.STRING,
        },
    },
    {
        freezeTableName: true,	
    },
);

Country.hasMany(City); 


