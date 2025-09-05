import mongoose from "mongoose";

const connectDB = async()=>{
    try{
        
        mongoose.set('strictQuery',false)    // for some warning.
        const conn = mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        });
        console.log(`MongoDB Connected ${conn.connection}`);
    }
    catch(error){
        console.log(`Error during connection to mongoDB ${error.message}`);
        process.exit(1);
    }
}

export default connectDB;