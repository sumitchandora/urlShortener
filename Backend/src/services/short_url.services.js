import {generateNanoId} from "../utils/helper.js";
import { getCustomShortUrl, saveShortUrl } from "../dao/short_url.js";

// Without UserId (No User)
export const createShortUrlServiceWithoutUser = async(url)=>{
    try{
    const shortUrl = generateNanoId(6);
    if(!shortUrl) throw new Error("Short Url doesn't generate")    // Error Handling
    await saveShortUrl(shortUrl,url)
    return shortUrl
    }
    catch(err){
        throw err
    }
}


// With User

export const createShortUrlServiceWithUser = async(url,userId,slug=null)=>{
    const shortUrl = slug || generateNanoId(6);
    console.log(shortUrl)
    let exists = await getCustomShortUrl(slug)
    if(exists){
        return "Url Exists"
     }
    await saveShortUrl(shortUrl,url,userId)
    return shortUrl
}
