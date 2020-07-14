import express from 'express';
import roleController from '../controllers/roleController';
import authCheck from '../middlewares/authCheck';


const routers = express.Router();

routers.get("/roles",authCheck,roleController.getRoles);

export default routers