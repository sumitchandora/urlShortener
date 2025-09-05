import axiosInstance from "../utils/axiosInstance.js"

export const createShortUrl = async(url,slug=null)=>{
    const {data} = await axiosInstance.post("/api/create",{url,slug})
    return data
}

export const delete_Url = async(id)=>{
    const {data} = await axiosInstance.post("/delete",{id})
}


