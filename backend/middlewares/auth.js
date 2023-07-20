import User from "../models/users.schema.js";
import { decPass } from "../utils/hashPasswords.js";
import { validator } from "../utils/passwordValidator.js";

export const checkRegisterMiddleware = (req,res,next) =>{
    try {
        const {username, email, password, confirmPassword} = req.body;
        if(!username) return res.send("Username is required.");
        if(!email) return res.send("Email is required.");
        if(!password) return res.send("Password field is empty.");
        if(!confirmPassword) return res.send("Password field is empty");

        if(password !== confirmPassword){
            return res.send("Passwords do not match.");
        }

        try{
            validator(password);
        }catch(err){
            return res.status(400).json({error : err.message});
        }
        
        next();
    } catch (error) {
        return res.json(error);
    }
}

export const checkLoginMiddleware = async(req,res,next) =>{
    try{
        const {email, password} = req.body;
        if(!email) return res.status(400).json({status : 400, message : "Email is required."});
        if(!password) return res.status(400).json({status: 400, message : "Password is required."});

        const findUser = await User.findOne({email}).exec();
        if(!findUser) return res.status(400).json({status : 400, message : "User not found."});
        const decryptPass = decPass(password, email);
        if(decryptPass){
            next();
        }else{
            return res.status(200).json({status : 200, message : "Incorrect Credentials."});
        }
    }catch(err){
        return res.send(err);
    }
}