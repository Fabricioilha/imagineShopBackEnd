import { ObjectId } from "mongodb"

export type UserType = {
    _id?: ObjectId,
    name: string,
    email: string,
    password: string,
    createdAt?: Date,
    updatedAt?: Date
}

export type updateUserType = {
    id: string,
    body:{
        name?:string,
        email?:string,
        passwor?:string
    }
}

export interface tokenPayload {
    user:{
        _id:string,
        name:string,
        email:string,
        password:string,
        createdAt:string,
        updatedAt:string,
        __v:number
    },
    iat:number,
    exp:number
}

export type productType = {
    id?: string,
    name?: string,
    description?: string,
    price?: number,
    summary?: string,
    stock?: number,
    filename?: string
}