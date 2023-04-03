import api from '../api/image.js';


////////////////////////////////////////////////////////////////////////////////
//                               GET Controllers                              //
////////////////////////////////////////////////////////////////////////////////

const getImages = async (req, res) => {
    res.json(await api.getImages());
};

const getImage = async (req, res) => {
    const id = req.params.id;
    res.json(await api.getImage(id));
};


///////////////////////////////////////////////////////////////////////////////
//                              POST Controllers                             //
///////////////////////////////////////////////////////////////////////////////


const postImage = async function (req, res, next) {

    const image = req.body;
    const newImage = await api.createImage(image);
    res.json(newImage);
}


//////////////////////////////////////////////////////////////////////////////
//                              PUT Controllers                             //
//////////////////////////////////////////////////////////////////////////////

const putImage = async (req, res) => {
    const id = req.params.id;
    const image = req.body;

    const updatedImage = await api.updateImage(id, image) || {};
    res.json(updatedImage);
};


///////////////////////////////////////////////////////////////////////////////
//                             DELETE Controllers                            //
///////////////////////////////////////////////////////////////////////////////

const deleteImage = async (req, res) => {
    const id = req.params.id;

    const removedImage = await api.deleteImage(id) || {};
    res.json(removedImage);
};

export default {
    getImages,
    getImage,
    postImage,
    putImage,
    deleteImage,
};
