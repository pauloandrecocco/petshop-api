import express from "express";

// Controllers
import ServicoController from "../controllers/servico.controller.js";

const router = express.Router();

router.post("/", ServicoController.createServico);
router.get("/", ServicoController.listServicos);

// Error handling
router.use((err, req, res, next) => {
  res.status(err.code ?? 500).send({ error: err.message });
  logger.error(`${req.method} ${req.baseUrl} - ${err.message}`);
});

export default router;
