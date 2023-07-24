import express from "express";
import morgan from "morgan";
import cors from "cors";
import router from "./routes/userRoutes.js";
import conn from "./services/db.js";

const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(cors());
app.use("/sql", router);


conn.connect((err) =>{
    if(err) throw err;
    console.log("Connected.");
});

app.listen(3000);