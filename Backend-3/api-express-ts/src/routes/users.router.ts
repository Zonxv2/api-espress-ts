import { Router, Request, Response } from "express";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: Endpoints para gestionar usuarios
 */

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Obtener todos los usuarios
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Lista de usuarios
 */
router.get("/", (_req: Request, res: Response) => {
  res.json({
    status: 200,
    statusMsg: "Success",
    data: []
  });
});

/**
 * @swagger
 * /api/users:
 *   post:
 *     summary: Crear un usuario
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       200:
 *         description: Usuario creado
 */
router.post("/", (req: Request, res: Response) => {
  res.json({
    status: 200,
    statusMsg: "Usuario creado",
    data: req.body
  });
});

/**
 * @swagger
 * /api/users/{id}:
 *   get:
 *     summary: Obtener un usuario por ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Usuario encontrado
 */
router.get("/:id", (req: Request, res: Response) => {
  res.json({
    status: 200,
    statusMsg: "Usuario encontrado",
    data: { id: req.params.id }
  });
});

/**
 * @swagger
 * /api/users/{id}:
 *   put:
 *     summary: Actualizar un usuario por ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       200:
 *         description: Usuario actualizado
 */
router.put("/:id", (req: Request, res: Response) => {
  res.json({
    status: 200,
    statusMsg: "Usuario actualizado",
    data: req.body
  });
});

/**
 * @swagger
 * /api/users/{id}:
 *   delete:
 *     summary: Eliminar un usuario por ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Usuario eliminado
 */
router.delete("/:id", (req: Request, res: Response) => {
  res.json({
    status: 200,
    statusMsg: "Usuario eliminado",
    data: { id: req.params.id }
  });
});

export default router;
