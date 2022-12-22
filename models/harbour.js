import { DataTypes } from "sequelize";
import { sequelize } from "../model/sequelize.js";
import { City } from "./city.js";

export const Harbour = sequelize.define(
    "harbours",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        harbour_name: {
            type: DataTypes.STRING,
        },
/*         city_id: {
            type: DataTypes.INTEGER,
        }, */
    },
    {
        timestamps: false,
    },
);

Harbour.belongsTo(City, {
    foreignKey: 'id',
    targetId: 'city_id'
}); 

/* Harbour.belongsTo(City, {
    foreignKey: 'id',
    target_key: 'city_id'
}) 

City.hasMany(Harbour, {
    foreignKey: 'city_id'
}); */


/* Harbour.hasMany(Boat, {
    foreignKey: 'harbour_id'
});

}); */
/* 

Harbour.hasMany(Boat, {
    foreignKey: 'harbour_id',
    sourceKey: 'id'
});

Boat.belongsTo(Harbour, {
    foreignKey: 'id',
    targetId: 'harbour_id'
}); */