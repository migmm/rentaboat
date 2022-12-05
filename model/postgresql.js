import pg from 'pg'

const client = new pg.Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "12345",
    database: "boatsforrent"
})

export {client as default};