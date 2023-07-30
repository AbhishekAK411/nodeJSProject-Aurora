import express from "express";
import { checkLoginMiddleware, checkRegisterMiddleware } from "../middlewares/auth.js";
import { login, register, renderHome, renderLogin, renderRegister } from "../controllers/user.controller.js";
import {CronJob} from "cron";
import { returnCurrentUserJSON } from "../controllers/currentUserJSON.js";

let job = new CronJob("* * * * *", async() =>{
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
    let charLength = characters.length;
    let token = "";

    for(let i=0;i<=100;i++){
        token += characters.charAt(Math.floor(Math.random() * charLength));
    }
    console.log(token);
});


const router = express.Router();

//! ROUTES HERE
//* Register Routes
router.get("/register", renderRegister);
router.post("/register", checkRegisterMiddleware, register);

//* Login Routes
router.get("/login", renderLogin);
router.post("/login", checkLoginMiddleware, login);

//* Home Routes
router.get("/home", renderHome);

//* Return JSON File generated.
router.get("/getJSON", returnCurrentUserJSON);

export default router;