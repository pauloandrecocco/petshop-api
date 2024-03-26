import express from "express";

// Controllers
import AnimalController from "../controllers/animal.controller.js";

const router = express.Router();

router.post("/", AnimalController.createAnimal);
router.get("/", AnimalController.listAnimais);
router.get("/:animal_id", AnimalController.getAnimal);
router.delete("/:animal_id", AnimalController.deleteAnimal);
router.put("/:animal_id", AnimalController.updateAnimal);

// Error handling
router.use((err, req, res, next) => {
  res.status(err.code ?? 500).send({ error: err.message });
  logger.error(`${req.method} ${req.baseUrl} - ${err.message}`);
});

export default router;
