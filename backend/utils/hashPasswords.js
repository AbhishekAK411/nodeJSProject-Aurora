import bcrypt from "bcrypt";
import User from "../models/users.schema.js";

export const encPass = async(password) => {
  try {
    const saltRounds = 10;
    const salt =await bcrypt.genSalt(saltRounds);
    const hash =await bcrypt.hash(password, salt);
    return hash;
  } catch (error) {
    console.log("Encryption Error ==>", error);
    return;
  }
};

export const decPass = async(password, email) =>{
    try {
        const findUser = await User.findOne({email}).exec();
        const decryptCheck =await bcrypt.compare(password, findUser.password);
        if(decryptCheck){
            return true;
        }else{
            return false;
        }
    } catch (error) {
        console.log("Decryption Error ==>", error);
        return;
    }
}