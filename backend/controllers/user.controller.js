import User from "../models/users.schema.js";
import fs from "fs";
import path from "path";
import { encPass } from "../utils/hashPasswords.js";

const __dirname = path.resolve();

export const renderRegister = (req,res) =>{
    try {
        return res.sendFile(__dirname + '/public/HTML/register.html');
    } catch (error) {
        return res.send(error);
    }
}

export const register = async(req,res) =>{
    try {
        const {username, email, password} = req.body;
        const response = await User.findOne({email}).exec();
        if(response) return res.send("User is already registered. Please proceed to login.");

        const hashPass =await encPass(password);

        try{
            const newUser = new User({
                username,
                email,
                password : hashPass
            });
            await newUser.save();
            return res.status(200).json({status : 200, message : "User registered successfully."});
        }catch(err){
            return res.status(400).json({error : err.message});
        }

        
    } catch (error) {
        return res.status(400).send(error);
    }
}

export const renderLogin = (req,res) =>{
    try {
        return res.sendFile(__dirname + "/public/HTML/login.html");
    } catch (error) {
        return res.send(error);
    }
}

export const login = async(req,res) =>{
    try {
        const userData = req.body;
        const userDataJSON = JSON.stringify(userData);
        fs.writeFileSync(__dirname + '/public/JSON/currentUser.json', userDataJSON);
        res.redirect('/aurora/home');
        // return res.status(200).json({success : 200, message : "Login successful."});
    } catch (error) {
        return res.send(error);
    }
}

export const renderHome = async(req,res) =>{
    try{
        return res.sendFile(__dirname + "/public/HTML/home.html");
    }catch(err){
        return res.send(err);
    }
}
