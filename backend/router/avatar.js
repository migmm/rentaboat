import express from 'express';
import avatarsController from '../controller/avatar.js';


const routerAvatars = express.Router();

routerAvatars.get('/', avatarsController.getAvatars);
routerAvatars.get('/:id', avatarsController.getAvatar);

routerAvatars.post('/', avatarsController.postAvatar);

routerAvatars.put('/:id', avatarsController.putAvatar);
routerAvatars.delete('/:id', avatarsController.deleteAvatar);

export default routerAvatars;
