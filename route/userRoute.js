import express from 'express';
import * as userController from '../controller/userController.js';

const user_route = express();
user_route.post('/create', userController.createUser);
user_route.get('/read',  userController.readUser);
user_route.get('/read-all',  userController.readUsers);
user_route.put('/update',  userController.replaceUser);
user_route.patch('/update',  userController.updateUser);
user_route.delete('/delete',  userController.deleteUser);

export default user_route;
