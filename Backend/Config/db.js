import mongoose from "mongoose";

const connectDB = async () => {

try{

    const con = await mongoose.connect("mongodb+srv://sudhagarmsr712:12345@e-com.qnpt6.mongodb.net/e-com")

    console.log("DB Connected");

}catch(err){
    console.log(`Error - ${err} `)
    process.exit(1);
}

}


export default connectDB;