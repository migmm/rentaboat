import Sequelize from 'sequelize';
import * as dotenv from 'dotenv'

export const sequelize = new Sequelize(
    process.env.SQL_DATABASE, // db name,
    process.env.SQL_USER, // username
    process.env.SQL_PASSWORD, // password
    {
    host: process.env.SQL_HOST,
    dialect: 'postgres',
    }
);