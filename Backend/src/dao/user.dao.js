import urlSchema from "../models/short_url.model.js"
import User from "../models/user.model.js"

export const findUserByEmail = async(email)=>{
    const user = await User.findOne({email})
    return user
}

export const findUserById = async(id)=>{
    const user = await User.findById(id)
    return user
}

export const createUser = async(name,email,password)=>{
    const newUser = await User({name,email,password})
    await newUser.save()
    return newUser
}

export const get_All_Urls = async(id)=>{
    const data = await urlSchema.find({user:id})
    return data
}