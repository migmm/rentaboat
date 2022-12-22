import { DataTypes } from "sequelize";
import { sequelize } from "../model/sequelize.js";

export const Customer = sequelize.define(
    "customers",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        customer_name: {
            type: DataTypes.STRING,
        },
        customer_mail: {
            type: DataTypes.STRING,
        },
        customer_phone: {
            type: DataTypes.STRING,
        },
    /*     customer_avatar: {
            type: DataTypes.INTEGER,
        }, */
    },
    {
        timestamps: false,
    },
);

/* Customer.hasMany(Rental, {
    foreignKey: 'customer_id'
});

Customer.belongsTo(Avatar, {
    foreignKey: 'id',
    target_key: 'customer_avatar'
}); */