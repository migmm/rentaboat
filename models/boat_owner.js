import { DataTypes } from "sequelize";
import { sequelize } from "../model/sequelize.js";


export const Boat_owner = sequelize.define(
    "boat_owners",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        owner_name: {
            type: DataTypes.STRING,
        },
        owner_mail: {
            type: DataTypes.STRING,
        },
        owner_phone: {
            type: DataTypes.STRING,
        },
    /*     owner_avatar: {
            type: DataTypes.INTEGER,
        }, */
    },
    {
        timestamps: false,
    },
);

/* Boat_owner.hasMany(Avatar, {
    foreignKey: 'avatar_id',
    sourceKey: 'id'
});

Avatar.belongsTo(Boat_owner, {
    foreignKey: 'id',
    targetId: 'avatar_id'
}); 
 */

/* 

Boat_owner.belongsTo(Avatar, {
    foreignKey: 'id',
    targetId: 'boat_owner_id'
}) */