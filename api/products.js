import client from '../model/postgresql.js'

//const modelBoats = BoatModel.get(config.PERSISTENCE_TYPE);
client.connect();

///////////////////////////////////////////////////////////////////////////////
//                                API Get ALL                                //
///////////////////////////////////////////////////////////////////////////////

const getBoats = async () => {
    const boats = await client.query('SELECT * from boats ORDER BY id ASC');
    return boats.rows;
};


///////////////////////////////////////////////////////////////////////////////
//                                API Get ONE                                //
///////////////////////////////////////////////////////////////////////////////

const getBoat = async id => {
    const boat =  await client.query('SELECT * FROM boats WHERE id = $1', [id]);
    return boat.rows;
};


///////////////////////////////////////////////////////////////////////////////
//                                API Create                                 //
///////////////////////////////////////////////////////////////////////////////

const createBoat = async boat => {
    console.log(boat.name)
    const createdBoat =  await client.query('INSERT INTO boats (name, location) VALUES ($1, $2)', [boat.name, boat.location]);
    return createdBoat;
};


///////////////////////////////////////////////////////////////////////////////
//                                API Update                                 //
///////////////////////////////////////////////////////////////////////////////

const updateBoat = async (id, boat) => {
        const updatedBoat = await client.query('UPDATE boats SET name = $1, location = $2 WHERE id = $3', [
            boat.name,
            boat.location,
            id
        ]);

        return updatedBoat;
};


///////////////////////////////////////////////////////////////////////////////
//                                API Delete                                 //
///////////////////////////////////////////////////////////////////////////////

const deleteBoat = async id => {
    const removedBoat = client.query('DELETE FROM boats where id = $1', [
        id
    ]);

    return removedBoat;
};


export default {
    getBoats,
    getBoat,
    createBoat,
    updateBoat,
    deleteBoat
};