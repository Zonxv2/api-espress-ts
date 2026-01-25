import { Router } from "express";
import productRouter from "./product.router";
import usersRouter from "./users.router";

const router = Router();

router.use("/products", productRouter);
router.use("/users", usersRouter);

export default router;
