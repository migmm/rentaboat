import { DataTypes } from "sequelize";
import { sequelize } from "../model/sequelize.js";
/* import { Boat } from "./Boat.js"; */

export const Image = sequelize.define(
    "images",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        image_url: {
            type: DataTypes.STRING,
        },
    /*     boat_id: {
            type: DataTypes.INTEGER,
        }, */
    },
    {
        timestamps: false,
    },
);

/* Image.hasMany(Boat, {
    foreignKey: 'boat_id',
    sourceKey: 'id'
});

Boat.belongsTo(Image, {
    foreignKey: 'id',
    targetId: 'boat_id'
})

/* Image.belongsTo(Boats, {
    foreignKey: 'id',
    target_key: 'boat_id'
}); */