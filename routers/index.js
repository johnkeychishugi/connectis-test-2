import express from 'express';
import userRouter from './users';
import produitRouter from './produits';
import roleRouter from './roles';
import carteStockRouter from './cartes';

const router = express.Router();

router.use(userRouter);
router.use(produitRouter);
router.use(roleRouter);
router.use(carteStockRouter);



export default router;