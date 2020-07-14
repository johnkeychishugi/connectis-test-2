import express from 'express';
import produitController from '../controllers/produitController';
import authCheck from '../middlewares/authCheck';

const routers = express.Router();

routers.get("/produits",authCheck,produitController.getProduits);

export default routers