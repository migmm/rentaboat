
import { Harbour } from '../models/harbour.js';
import { City } from '../models/city.js';
import { Boat } from '../models/Boat.js';
//const modelHarbours = HarbourModel.get(config.PERSISTENCE_TYPE);


///////////////////////////////////////////////////////////////////////////////
//                                API Get ALL                                //
///////////////////////////////////////////////////////////////////////////////

const getHarbours = async () => {
    const harbours = await Country.findAll({
        include: [
            {
                model: City,
                required: true
            },
            {
                model: Boat,
                required: true
            }
        ]
    });
    //const harbours = await client.query('SELECT * from harbours ORDER BY id ASC');
    return harbours;
};


///////////////////////////////////////////////////////////////////////////////
//                                API Get ONE                                //
///////////////////////////////////////////////////////////////////////////////

const getHarbour = async id => {
    const harbour =  await client.query('SELECT * FROM harbours WHERE id = $1', [id]);
    return harbour.rows;
};


///////////////////////////////////////////////////////////////////////////////
//                                API Create                                 //
///////////////////////////////////////////////////////////////////////////////

const createHarbour = async harbour => {
    console.log(harbour.name)
    const createdHarbour =  await client.query('INSERT INTO harbours (name, location) VALUES ($1, $2)', [harbour.name, harbour.location]);
    return createdHarbour;
};


///////////////////////////////////////////////////////////////////////////////
//                                API Update                                 //
///////////////////////////////////////////////////////////////////////////////

const updateHarbour = async (id, harbour) => {
        const updatedHarbour = await client.query('UPDATE harbours SET name = $1, location = $2 WHERE id = $3', [
            harbour.name,
            harbour.location,
            id
        ]);

        return updatedHarbour;
};


///////////////////////////////////////////////////////////////////////////////
//                                API Delete                                 //
///////////////////////////////////////////////////////////////////////////////

const deleteHarbour = async id => {
    const removedHarbour = client.query('DELETE FROM harbours where id = $1', [
        id
    ]);

    return removedHarbour;
};


export default {
    getHarbours,
    getHarbour,
    createHarbour,
    updateHarbour,
    deleteHarbour
};