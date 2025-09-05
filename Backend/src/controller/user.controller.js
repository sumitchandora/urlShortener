import { get_All_Urls } from "../dao/user.dao.js";
import wrapAsync from "../utils/tryCatchWrapper.js";

export const getAllUrl = wrapAsync(async (req, res) => {
    let { _id } = req.user
    let urls = await get_All_Urls(_id)
    res.status(200).json({ message:"Urls transfer",urls:urls })
})