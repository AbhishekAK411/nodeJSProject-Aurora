import path from "path";
import fs from "fs";

const __dirname = path.resolve();

export const returnCurrentUserJSON = async(req,res) =>{
    try {
        let jsondata = fs.readFileSync(__dirname + "/public/JSON/currentUser.json", 'utf8');
        return res.send(jsondata);
    } catch (error) {
        return res.send(error);
    }
}