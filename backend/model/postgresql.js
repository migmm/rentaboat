import * as dotenv from 'dotenv'
import pg from 'pg'
dotenv.config()

const config = {
    db: {
        host: process.env.SQL_HOST,
        port: process.env.SQL_PORT,
        user: process.env.SQL_USER,
        password:  process.env.SQL_PASSWORD,
        database: process.env.SQL_DATABASE,
    },
};

var client = new pg.Client(config.db);

export { client as default };