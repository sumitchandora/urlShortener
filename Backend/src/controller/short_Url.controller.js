import { createShortUrlServiceWithUser, createShortUrlServiceWithoutUser } from "../services/short_url.services.js";
import urlSchema from "../models/short_url.model.js"
import {getshortUrl} from "../dao/short_url.js";
import wrapAsync from "../utils/tryCatchWrapper.js";

export const createShortUrl = wrapAsync( async (req,res,next)=>{
    const data = req.body;
    let shortUrl;
    if(!req.user){
        shortUrl = await createShortUrlServiceWithoutUser(data.url)
    }
    else{
        shortUrl = await createShortUrlServiceWithUser(data.url,req.user._id,data.slug)
    }
    if(shortUrl=="Url Exists"){
        res.status(200).json({shortUrl:"Url Exists"})
    }
    else {
        res.status(200).json({shortUrl :  shortUrl});
        }
    }
)

export const redirectFromShortUrl = wrapAsync( async (req,res)=>{
    const {id} = req.params
    const url = await getshortUrl(id)
    if(!url) throw new Error("Short Url not found")
    res.redirect(url.full_url)
}
)