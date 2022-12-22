import { DataTypes } from "sequelize";
import { sequelize } from "../model/sequelize.js";
/* import { Customer } from "./customer.js";
import { Boat } from "./Boat.js"; */


export const Cart = sequelize.define(
    "carts",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
      /*   customer_id: {
            type: DataTypes.INTEGER
        },
        boat_id: {
            type: DataTypes.INTEGER
        }, */
        date_from: {
            type: DataTypes.DATE,
        },
        date_to: {
            type: DataTypes.DATE,
        },
        total_price: {
            type: DataTypes.FLOAT,
        },
    },
    {
        timestamps: false,
    },
);
/* 
Cart.belongsTo(Boat, {
    foreignKey: 'id',
    target_key: 'boat_id'
}); */
/* 
Cart.hasMany(Customer, {
    foreignKey: 'customer_id',
    sourceKey: 'id'
});

Customer.belongsTo(Cart, {
    foreignKey: 'id',
    targetId: 'customer_id'
})

Cart.hasMany(Boat, {
    foreignKey: 'boat_id',
    sourceKey: 'id'
});

Boat.belongsTo(Cart, {
    foreignKey: 'id',
    targetId: 'boat_id'
}) */