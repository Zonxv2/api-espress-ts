import { Router } from "express";
import { validateGetProduct, validatePostProduct } from "../middlewares/validators/product.validator";
import { productController } from "../controllers/product.controllers";

const router = Router();

router.get('/', productController.getAll);
router.post('/', [validatePostProduct], productController.create);
router.get('/:id', [validateGetProduct], productController.getById);
router.put('/:id', [validateGetProduct, validatePostProduct], productController.update);
router.delete('/:id', [validateGetProduct], productController.delete);

export default router;