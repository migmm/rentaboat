import { DataTypes } from "sequelize";
import { sequelize } from "../model/sequelize.js";
/* import { Boat_owner } from "./Boat_owner.js";
import { Cart } from "./cart.js";
import { Rental } from "./rental.js";
import { City } from "./city.js";*/
import { Harbour} from "./harbour.js"; 

export const Boat = sequelize.define(
    "boat",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        boatType: {
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
        boatStatus: {
            type: DataTypes.BOOLEAN,
        },
        statusReason: {
            type: DataTypes.STRING,
        },
    },
    {
        freezeTableName: true,	
    },
);


/* 
Boat.hasMany(Cart)
//Boat.belongsTo(Cart)

Boat.hasMany(Rental)
//Boat.belongsTo(Rental)

City.hasMany(Boat);

Harbour.hasMany(Boat);


Rental.HasMany(Boat)
Boat.BelongsTo(Rental) */


Harbour.hasMany(Boat);
Boat.belongsTo(Harbour)
