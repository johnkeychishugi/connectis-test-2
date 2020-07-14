import express from 'express';
import userController from '../controllers/userController';
import authCheck from '../middlewares/authCheck';


const routers = express.Router();

routers.post("/login",userController.login)
        .get("/users",authCheck,userController.getUsers)
        .get("/user",authCheck,userController.getUser)
        .post("/user",authCheck,userController.addUser)
        .get("/userswithroles",authCheck,userController.getUsersWithRoles);

export default routers