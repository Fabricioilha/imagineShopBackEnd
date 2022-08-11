import 'dotenv/config'
import mongoose from "mongoose";

export const dbConect = async ()=>{
    try {
        await mongoose.connect(
            `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.uswcev3.mongodb.net/imagineShop?retryWrites=true&w=majority`
        )
        console.log("Conectado ao banco de dados....")
    } catch (error) {
        console.log(error);        
    }
}
