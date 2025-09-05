import { findUserById } from "../dao/user.dao.js"
import { verifyToken } from "../utils/helper.js"

export const authMiddleware = async(req,res,next)=>{
    const token = req.cookies.accessToken
    if(!token) throw res.status(401).json({message:"UnauthorizedA"})
    
    try{
        const decoded = verifyToken(token)
        const user = await findUserById(decoded.id)
        if(!user) return res.status(401).json({message:"UnauthorizedB"})
        req.user = user
        next()
    }
    catch(error){
        return res.status(401).json({message:"UnauthorizedC"})
    }

}