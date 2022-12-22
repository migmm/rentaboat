import { DataTypes } from "sequelize";
import { sequelize } from "../model/sequelize.js";
import { Harbour } from "./harbour.js";
import { Boat } from "./Boat.js";

export const City = sequelize.define(
    "cities",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        city_name: {
            type: DataTypes.STRING,
        },
/*         country_id: {
            type: DataTypes.INTEGER,
        }, */ 
    },
    {
        timestamps: false,
    },
);

City.hasMany(Harbour, {
    foreignKey: 'city_id',
    sourceKey: 'id'
});

/* Harbour.belongsTo(City, {
    foreignKey: 'id',
    targetId: 'city_id'
}); */
/* 
City.hasMany(Boat, {
    foreignKey: 'city_id',
    sourceKey: 'id'
});

Boat.belongsTo(City, {
    foreignKey: 'id',
    targetId: 'city_id'
});
 */