import express from 'express';
import imagesController from '../controller/image.js';


const routerImages = express.Router();

routerImages.get('/', imagesController.getImages);
routerImages.get('/:id', imagesController.getImage);

routerImages.post('/', imagesController.postImage);

routerImages.put('/:id', imagesController.putImage);
routerImages.delete('/:id', imagesController.deleteImage);

export default routerImages;
