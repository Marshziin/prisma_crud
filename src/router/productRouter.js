import { Router } from 'express';
import { ProductController } from '../controllers/ProductController.js';

const router = Router();

router
  .post("/Products", ProductController.createDBInfo)
  .get("/Products", ProductController.readDBInfo)
  .get("/Products/:id", ProductController.readOneDBInfo)
  .put("/Products/:id", ProductController.updateDBInfo)
  .delete("/Products/:id", ProductController.deleteDBInfo);

export default router;