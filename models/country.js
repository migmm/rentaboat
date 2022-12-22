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

Country.hasMany(City, {
    foreignKey: 'country_id',
    sourceKey: 'id'
}); 

City.belongsTo(Country, {
    foreignKey: 'country_id',
    targetId: 'id'
}); 