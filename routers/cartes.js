import express from 'express';
import carteStockController from '../controllers/carteStockController';
import authCheck from '../middlewares/authCheck';


const routers = express.Router();

routers.get("/cartes",authCheck,carteStockController.getCartes)
       .get("/carteswithproducts",authCheck,carteStockController.getCartesWithProducts);

export default routers