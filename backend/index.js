import express from "express";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import router from "./routes/userRoutes.js";

//! APP INSTANCE
const app = express();


//! MIDDLEWARES
app.use(morgan('dev'));
app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({extended : true}));
app.use(cors());
app.use("/aurora", router);

dotenv.config();


//! DATABASE CONNECTION
mongoose.connect(process.env.MONGO)
.then(() => console.log("DB Connection Established."))
.catch((err) => console.log("DB Error ==>", err))


//! APP LISTENING ON PORT
app.listen(process.env.PORT, () => console.log(`Listening on port ${process.env.PORT}`));