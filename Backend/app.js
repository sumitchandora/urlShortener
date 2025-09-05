import express, { urlencoded } from "express";
import dotenv from "dotenv";
dotenv.config("./.env")
import cors from "cors";
import connectDB from "./src/config/mongo.config.js"
import urlSchema  from "./src/models/short_url.model.js";
import short_Url from "./src/routes/short_url.route.js";
import auth_routes from "./src/routes/auth.route.js"
import {createShortUrl, redirectFromShortUrl} from "./src/controller/short_url.controller.js";
import { errorHandler } from "./src/utils/errorHandler.js";
import { attachUser } from "./src/utils/attachUser.js";
import cookieParser from "cookie-parser";
import get_urls_router from "./src/routes/user.route.js";



const temp = "Sumit"
const app = express();

app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))

app.use(express.json())     // body parser
app.use(express.urlencoded({extended:true})) 
app.use(cookieParser())       //
app.use(attachUser)

app.use("/api/auth",auth_routes)
app.use("/api/create",short_Url)

app.post("/delete",async(req,res)=>{
    let {id} = req.body 
    await urlSchema.findByIdAndDelete(id);
    res.status(200).json({message:"Success"})
})

app.use("/api/urls",get_urls_router)
app.post("/shorten", createShortUrl);

app.get("/:id",redirectFromShortUrl)

app.use(errorHandler)

app.listen(3000,() => {
    connectDB()
    console.log("Server is running. - 3000")
})