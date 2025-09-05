import axiosInstance from "../utils/axiosInstance.js";

export const register = async(name,email,password)=>{
    const {data} = await axiosInstance.post("/api/auth/register",{name,email,password})
    return data
}

export const login = async(email,password)=>{
    const {data} = await axiosInstance.post("/api/auth/login",{email,password})
    return data
}

export const logout = async()=>{
    const {data} = await axiosInstance.post("/api/auth/logout")
    return data
}

export const getCurrentUser = async()=>{
    const {data} = await axiosInstance.post("/api/auth/me")
    return data
}

export const getUrls = async()=>{
   const urls = await axiosInstance.post("/api/urls/getAllUrls")
   let extractedUrl = urls.data.urls
    return extractedUrl
}

export const fetchCookies = async()=>{
    const cookie = await axiosInstance.get("/api/auth/getCookie")
    return cookie.data.message
}