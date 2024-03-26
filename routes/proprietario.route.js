import express from "express";

// Controllers
import ProprietarioController from "../controllers/proprietario.controller.js";

const router = express.Router();

router.post("/", ProprietarioController.createProprietario);
router.get("/", ProprietarioController.listProprietarios);
router.get("/:proprietario_id", ProprietarioController.getProprietario);
router.delete("/:proprietario_id", ProprietarioController.deleteProprietario);
router.put("/:proprietario_id", ProprietarioController.updateProprietario);

// Error handling
router.use((err, req, res, next) => {
  res.status(err.code ?? 500).send({ error: err.message });
  logger.error(`${req.method} ${req.baseUrl} - ${err.message}`);
});

export default router;
