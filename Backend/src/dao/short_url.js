import urlSchema from "../models/short_url.model.js";
import { ConflictError } from "../utils/errorHandler.js";

export const saveShortUrl = async(shortUrl,longUrl,userId)=>{
    try{
        const newUrl = new urlSchema({
            full_url:longUrl,
            short_url:shortUrl
        });
        if(userId){
            newUrl.user = userId 
        }
        await newUrl.save();
    }
    catch(err){
        //console.log(err.message)
        throw new ConflictError(err)
    }

}

export const getshortUrl = async(shortUrl)=>{
    return await urlSchema.findOneAndUpdate({short_url:shortUrl},{$inc:{clicks:1}}) 
}

export const getCustomShortUrl = async(slug)=>{
    return await urlSchema.findOne({short_url:slug});
}