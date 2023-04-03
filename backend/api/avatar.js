
import { Avatar_boat_owner } from '../models/avatar_boat_owner.js';
import { Customer } from '../models/customer.js';
import { Boat_owner } from '../models/boat_owner.js';
//const modelAvatars = AvatarModel.get(config.PERSISTENCE_TYPE);


///////////////////////////////////////////////////////////////////////////////
//                                API Get ALL                                //
///////////////////////////////////////////////////////////////////////////////

const getAvatars = async () => {
    const avatars = await Avatar_boat_owner.findAll({
        include: [
            {
                model: Customer,
                required: true
            },
            {
                model: Boat_owner,
                required: true
            }
        ]
    });
    //const avatars = await client.query('SELECT * from avatars ORDER BY id ASC');
    return avatars;
};


///////////////////////////////////////////////////////////////////////////////
//                                API Get ONE                                //
///////////////////////////////////////////////////////////////////////////////

const getAvatar = async id => {
    const avatar =  await client.query('SELECT * FROM avatars WHERE id = $1', [id]);
    return avatar.rows;
};


///////////////////////////////////////////////////////////////////////////////
//                                API Create                                 //
///////////////////////////////////////////////////////////////////////////////

const createAvatar = async avatar => {
    console.log(avatar.name)
    const createdAvatar =  await client.query('INSERT INTO avatars (name, location) VALUES ($1, $2)', [avatar.name, avatar.location]);
    return createdAvatar;
};


///////////////////////////////////////////////////////////////////////////////
//                                API Update                                 //
///////////////////////////////////////////////////////////////////////////////

const updateAvatar = async (id, avatar) => {
        const updatedAvatar = await client.query('UPDATE avatars SET name = $1, location = $2 WHERE id = $3', [
            avatar.name,
            avatar.location,
            id
        ]);

        return updatedAvatar;
};


///////////////////////////////////////////////////////////////////////////////
//                                API Delete                                 //
///////////////////////////////////////////////////////////////////////////////

const deleteAvatar = async id => {
    const removedAvatar = client.query('DELETE FROM avatars where id = $1', [
        id
    ]);

    return removedAvatar;
};


export default {
    getAvatars,
    getAvatar,
    createAvatar,
    updateAvatar,
    deleteAvatar
};