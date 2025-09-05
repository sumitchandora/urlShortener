import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,

    },
})

userSchema.set('toJSON',{
    transform:function(doc,ret){
        delete ret.password;
        delete ret.__v;
        return ret;
    }
})

const User = mongoose.model("User",userSchema)

export default User;