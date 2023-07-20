import mongoose, {Schema} from "mongoose";

const userSchema = new Schema({
    username : {
        type : String,
        required : true,
        unique : true,
        validate(value){
            if(value.length < 4){
                throw new Error('Username should be at least 4 chacters long.');
            }
            if(/\s/.test(value)){
                throw new Error('Username should not contain any white spaces.');
            }
            if(/[^A-Za-z0-9]/.test(value)){
                throw new Error('Username should not contain any special characters.');
            }
        }
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    }
});

export default mongoose.model("User", userSchema);
