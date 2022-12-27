
import { Boat_owner } from '../models/boat_owner.js';
import { Avatar_boat_owner } from '../models/avatar_boat_owner.js';
import { Boat } from '../models/boat.js';
//const modelBoatOwners = BoatOwnerModel.get(config.PERSISTENCE_TYPE);


///////////////////////////////////////////////////////////////////////////////
//                                API Get ALL                                //
///////////////////////////////////////////////////////////////////////////////

const getBoatOwners = async () => {
    const boatOwners = await Boat_owner.findAll({
        include: [
            {
                model: Avatar_boat_owner,
                required: true
            },
            {
                model: Boat,
                required: true
            }
        ]
    });
    //const boatOwners = await client.query('SELECT * from boatOwners ORDER BY id ASC');
    return boatOwners;
};


///////////////////////////////////////////////////////////////////////////////
//                                API Get ONE                                //
///////////////////////////////////////////////////////////////////////////////

const getBoatOwner = async id => {
    const boatOwner =  await client.query('SELECT * FROM boatOwners WHERE id = $1', [id]);
    return boatOwner.rows;
};


///////////////////////////////////////////////////////////////////////////////
//                                API Create                                 //
///////////////////////////////////////////////////////////////////////////////

const createBoatOwner = async boatOwner => {
    console.log(boatOwner.name)
    const createdBoatOwner =  await client.query('INSERT INTO boatOwners (name, location) VALUES ($1, $2)', [boatOwner.name, boatOwner.location]);
    return createdBoatOwner;
};


///////////////////////////////////////////////////////////////////////////////
//                                API Update                                 //
///////////////////////////////////////////////////////////////////////////////

const updateBoatOwner = async (id, boatOwner) => {
        const updatedBoatOwner = await client.query('UPDATE boatOwners SET name = $1, location = $2 WHERE id = $3', [
            boatOwner.name,
            boatOwner.location,
            id
        ]);

        return updatedBoatOwner;
};


///////////////////////////////////////////////////////////////////////////////
//                                API Delete                                 //
///////////////////////////////////////////////////////////////////////////////

const deleteBoatOwner = async id => {
    const removedBoatOwner = client.query('DELETE FROM boatOwners where id = $1', [
        id
    ]);

    return removedBoatOwner;
};


export default {
    getBoatOwners,
    getBoatOwner,
    createBoatOwner,
    updateBoatOwner,
    deleteBoatOwner
};