import { model, Schema } from "mongoose";

const produtcSchema = new Schema({
    name: String,
    description: String,
    price: Number,
    summary: String,
    stock: Number,
    filename: String
},{
    timestamps:true,
    collection:"produtcs"
})

export const ProductModel = model("product", produtcSchema, "produtcs")