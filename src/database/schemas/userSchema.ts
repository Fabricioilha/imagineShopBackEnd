import { model, Schema } from "mongoose";

const userSchema = new Schema({
    name: String,
    email: String,
    password: String
},{
    timestamps:true,
    collection:"users"
})

export const UserModel = model("user", userSchema, "users")