
import { Boat } from '../models/boat.js';
import { Boat_owner } from '../models/boat_owner.js';
import { Avatar } from '../models/avatar.js';
//const modelBoats = BoatModel.get(config.PERSISTENCE_TYPE);


///////////////////////////////////////////////////////////////////////////////
//                                API Get ALL                                //
///////////////////////////////////////////////////////////////////////////////

const getBoats = async () => {
    const boats = await Boat.findAll({
        include: [
            {
                model: Boat_owner,
                required: true
            },
            {
                model: Avatar,
                required: true
            }
        ]
    });
    //const boats = await client.query('SELECT * from boats ORDER BY id ASC');
    return boats;
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