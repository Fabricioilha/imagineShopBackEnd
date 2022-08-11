import { NextFunction, Request, Response } from "express";
import  Jwt from "jsonwebtoken";
import { UserService } from "../services/userService";
import { tokenPayload } from "../types/types";


export const authMiddleware = async (req:Request, res: Response, next: NextFunction)=>{
    const authorization = req.headers.authorization    
    const token = authorization? authorization.split(" ")[1] : undefined
    if(token){
        const secretKey = process.env.SECRET_KEY
        if(secretKey){
            Jwt.verify(token, secretKey, {ignoreExpiration: false}, async(err, decodedToken)=>{
                if(err){
                    return res.status(401).json({msg: "Não autorizado"})
                }else{
                    if(decodedToken){
                        const payload = decodedToken as tokenPayload
                        const user = await UserService.findByEmail(payload.user.email)
                        if(user){
                            console.log("passou em todas as verificações do authMiddleware")
                            next()
                        }
                    }
                }
            })
        }
    }
}