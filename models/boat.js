import { DataTypes } from "sequelize";
import { sequelize } from "../model/sequelize.js";

export const Boat = sequelize.define(
    "boats",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        boat_type: {
            type: DataTypes.STRING,
        },
        brand: {
            type: DataTypes.STRING,
        },
        model: {
            type: DataTypes.STRING,
        },
        year: {
            type: DataTypes.DATE,
        },
     /*    city_id: {
            type: DataTypes.INTEGER,
        }, */
     /*    harbour_id: {
            type: DataTypes.INTEGER,
        }, */
        capacity: {
            type: DataTypes.INTEGER,
        },
        description: {
            type: DataTypes.STRING,
        },
        length: {
            type: DataTypes.FLOAT,
        },
        price: {
            type: DataTypes.FLOAT,
        },
    },
    {
        timestamps: false,
    },
);

/* Boats.hasMany(Rental, {
    foreignKey: 'boat_id'
}); */

/* Boats.hasMany(Cart, {
    foreignKey: 'boat_id'
});

Boats.hasMany(Image, {
    foreignKey: 'boat_id'
});

-Boats.belongsTo(City, {
    foreignKey: 'id',
    target_key: 'city_id'
});

-Boats.belongsTo(Harbour, {
    foreignKey: 'id',
    target_key: 'harbour_id'
}); */