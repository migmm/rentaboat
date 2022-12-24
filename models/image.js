import { DataTypes } from "sequelize";
import { sequelize } from "../model/sequelize.js";
import { Boat } from "./boat.js";

export const Image = sequelize.define(
    "image",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        image_url: {
            type: DataTypes.STRING,
        },
    },
    {
        freezeTableName: true,	
    },
);

Boat.hasMany(Image);
Image.belongsTo(Boat);

