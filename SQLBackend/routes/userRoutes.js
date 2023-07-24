import express from "express";
import { getUsers, register } from "../controllers/register.js";

const router = express.Router();

//* Testing links for SQL
// router.get("/getTest", test);
// router.post("/postTest", postTest);

router.post("/register", register);
router.get("/users", getUsers);

export default router;