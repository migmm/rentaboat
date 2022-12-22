import { DataTypes } from "sequelize";
import { sequelize } from "../model/sequelize.js";
/* import { Boat_owner } from "./boat_owner.js";
import { Customer } from "./customer.js"; */

export const Avatar = sequelize.define(
    "avatars",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        avatar_url: {
            type: DataTypes.STRING,
        },
    },
    {
        timestamps: false,
    },
);

Avatar.hasMany(Boat_owner, {
    foreignKey: 'boat_ownerid',
    sourceKey: 'id'
});

Boat_owner.belongsTo(Avatar, {
    foreignKey: 'id',
    targetId: 'boat_ownerid'
})

Avatar.hasMany(Customer, {
    foreignKey: 'customerid',
    sourceKey: 'id'
});

Customer.belongsTo(Avatar, {
    foreignKey: 'id',
    targetId: 'customerid'
})
