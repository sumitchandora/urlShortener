import wrapAsync from "../utils/tryCatchWrapper.js"
import { registerUser,loginUser } from "../services/auth.services.js"
import { cookieOptions } from "../config/config.js"

export const register_user = wrapAsync(async(req,res)=>{
    let {name,email,password} = req.body
    const {token,user} = await registerUser(name,email,password)
    req.user = user
    res.cookie("accessToken",token,cookieOptions)
    res.status(200).json({user:user,message:"Register success"})
})

export const login_user = wrapAsync(async(req,res)=>{
    let {email,password} = req.body
    
    const {token,user} = await loginUser(email,password)
    req.user = user
    res.cookie("accessToken",token,cookieOptions)
    res.status(201).json({user:user,message:"login success"})
})

export const logout_user = wrapAsync(async(req,res)=>{
    res.clearCookie("accessToken", {
        httpOnly: true,
        secure : false,
        sameSite: "lax",
        path:"/"
      });
    res.status(201).json({message:"logout"})
})

export const current_user = wrapAsync(async(req,res)=>{
    res.status(200).json({user:req.user})
})

export const get_Cookie = wrapAsync(async(req,res)=>{
    let cookie = req.cookies.accessToken
    res.status(200).json({message:cookie != undefined})
})