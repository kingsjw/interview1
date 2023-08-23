import { Router } from 'express';
import { getAutoCompleteData, getProductsData, getCategories } from '../services/service';

const router = Router();

router.get("/products", getProductsData);
router.get("/products/autocomplete", getAutoCompleteData);
router.get("/products/categories", getCategories);

export default router;