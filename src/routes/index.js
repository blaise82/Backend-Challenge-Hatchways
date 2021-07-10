import { Router } from "express";
import { step1, getTags } from "../controllers";
const router = Router();

router.get("/", (req, res) => {
  res.send("Hello World!");
});

router.get("/api/ping", step1);
router.get("/api/posts/:tags/:sortBy?/:direction?", getTags);

export default router;
