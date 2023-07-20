import express from "express";
import { checkLoginMiddleware, checkRegisterMiddleware } from "../middlewares/auth.js";
import { login, register, renderLogin, renderRegister } from "../controllers/user.controller.js";

const router = express.Router();

//! ROUTES HERE
//* Register Routes
router.get("/register", renderRegister);
router.post("/register", checkRegisterMiddleware, register);

//* Login Routes
router.get("/login", renderLogin);
router.post("/login", checkLoginMiddleware, login);

export default router;