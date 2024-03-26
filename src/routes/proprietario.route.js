import express from "express";

// Controllers
import ProprietarioController from "../controllers/proprietario.controller.js";

const router = express.Router();

router.post("/", ProprietarioController.createProprietario);
router.get("/", ProprietarioController.listProprietarios);
router.get("/:proprietarioId", ProprietarioController.getProprietario);
router.delete("/:proprietarioId", ProprietarioController.deleteProprietario);
router.put("/:proprietarioId", ProprietarioController.updateProprietario);

// Error handling
router.use((err, req, res, next) => {
  res.status(err.code ?? 500).send({ error: err.message });
  logger.error(`${req.method} ${req.baseUrl} - ${err.message}`);
});

export default router;
