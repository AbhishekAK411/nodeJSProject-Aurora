import conn from "../services/db.js";
import bcrypt from "bcrypt";

export const register = async(req,res) =>{
    try {
        const {username, email, password} = req.body;

        conn.query(`select * from users where username = '${username}' or email = '${email}'`, async (err, existingUser)=>{
            if(err) return res.send(err);
            if(existingUser.length > 0){
                return res.status(400).json({status : 400, message : "User already registered."})
            }else{
                const saltRounds = 10;
                const salt = await bcrypt.genSalt(saltRounds);
                const hashPass = await bcrypt.hash(password, salt);

                conn.query(`INSERT INTO users (username, email, password) VALUES ('${username}', '${email}', '${hashPass}')`, (err,data) =>{
                    if(err) return res.send(err);
                    return res.status(200).json({status : 200, data : data});
                });
            }
        });
        
    } catch (error) {
        return res.send(error);
    }
}

export const getUsers = async(req,res) =>{
    try {
        conn.query("select * from users", (err,data) =>{
            if(err) return res.send(err);
            return res.status(200).json({status : 200, data : data, totalUsers : data?.length});
        });
    } catch (error) {
        return res.send(error);
    }
}