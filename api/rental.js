
import { Rental } from '../models/rental.js';
import { Boat } from '../models/boat.js';
import { Customer } from '../models/customer.js';

//const modelImages = ImageModel.get(config.PERSISTENCE_TYPE);


///////////////////////////////////////////////////////////////////////////////
//                                API Get ALL                                //
///////////////////////////////////////////////////////////////////////////////

const getImages = async () => {
    const images = await Rental.findAll({
        include: [
            {
                model: Boat,
                required: true
            },
            {
                model: Customer,
                required: true
            }
        ]
    });
    //const images = await client.query('SELECT * from images ORDER BY id ASC');
    return images;
};


///////////////////////////////////////////////////////////////////////////////
//                                API Get ONE                                //
///////////////////////////////////////////////////////////////////////////////

const getImage = async id => {
    const image =  await client.query('SELECT * FROM images WHERE id = $1', [id]);
    return image.rows;
};


///////////////////////////////////////////////////////////////////////////////
//                                API Create                                 //
///////////////////////////////////////////////////////////////////////////////

const createImage = async image => {
    console.log(image.name)
    const createdImage =  await client.query('INSERT INTO images (name, location) VALUES ($1, $2)', [image.name, image.location]);
    return createdImage;
};


///////////////////////////////////////////////////////////////////////////////
//                                API Update                                 //
///////////////////////////////////////////////////////////////////////////////

const updateImage = async (id, image) => {
        const updatedImage = await client.query('UPDATE images SET name = $1, location = $2 WHERE id = $3', [
            image.name,
            image.location,
            id
        ]);

        return updatedImage;
};


///////////////////////////////////////////////////////////////////////////////
//                                API Delete                                 //
///////////////////////////////////////////////////////////////////////////////

const deleteImage = async id => {
    const removedImage = client.query('DELETE FROM images where id = $1', [
        id
    ]);

    return removedImage;
};


export default {
    getImages,
    getImage,
    createImage,
    updateImage,
    deleteImage
};