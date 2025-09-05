import { findUserById } from "../dao/user.dao.js"
import { verifyToken } from "./helper.js"

export const attachUser=async(req,res,next)=>{
    let token = req.cookies.accessToken
    if(!token) return next()
    try{
        let decoded = verifyToken(token)
        const user = await findUserById(decoded.id)
        if(!user) return next()
        req.user = user
        next()
    }
    catch(error){
        next()
    }
}