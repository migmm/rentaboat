import { DataTypes } from "sequelize";
import { sequelize } from "../model/sequelize.js";
/* import { Customer } from "./customer.js";
import { Boat_owner } from "./boat_owner.js";
import { City } from "./city.js"; */

export const Rental = sequelize.define(
    "rentals",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
      /*   boat_id: {
            type: DataTypes.INTEGER,
        }, */
      /*   customer_id: {
            type: DataTypes.INTEGER,
        }, */
        available_date_from: {
            type: DataTypes.DATE,
        },
        available_date_to: {
            type: DataTypes.DATE,
        },
      /*   location: {
            type: DataTypes.INTEGER,
        }, */
        available_captain: {
            type: DataTypes.BOOLEAN,
        },
    },
    {
        timestamps: false,
    },
);
/* 
Rental.hasMany(Boat_owner, {
    foreignKey: 'avatar_id',
    sourceKey: 'id'
});

Boat_owner.belongsTo(Rental, {
    foreignKey: 'id',
    targetId: 'avatar_id'
})

Rental.hasMany(Customer, {
    foreignKey: 'customer_id',
    sourceKey: 'id'
});

Customer.belongsTo(Rental, {
    foreignKey: 'id',
    targetId: 'customer_id'
})
 */


/* Rental.belongsTo(Boat, {
    foreignKey: 'id',
    target_key: 'boat_id'
});

Rental.belongsTo(Customer, {
    foreignKey: 'id',
    target_key: 'customer_id'
});


 */