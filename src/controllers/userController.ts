import {Request , Response} from 'express'
import { UserService } from '../services/userService'
import { updateUserType } from '../types/types'
import jwt from 'jsonwebtoken'
import 'dotenv/config'

const UserController = {
    async add(req: Request, res: Response){
        try {
            await UserService.add(req.body)
            return res.json({msg:"Cadastrado com sucesso"})
        } catch (error) {
            return res.json(error)   
        }
    },
    async readById(req: Request, res: Response){
        try {
            const user = await UserService.readById(req.params.id)
            return res.json(user)
        } catch (error) {
            return res.json(error)
        }
    },
    async readAll(req: Request, res: Response){
        try {
            const allUsers = await UserService.readAll()
            return res.json(allUsers)
        } catch (error) {
            return res.json(error)
        }
    },
    async updateById (req: Request, res: Response){
        try {
            const data:updateUserType = {
                id: req.params.id,
                body: req.body
            }
            const updated = await UserService.update(data)
            return res.json(updated)
        } catch (error) {
            return res.json(error)
        }
    },
    async deleteById (req: Request, res: Response){
        try {
            const deleted = await UserService.delete(req.params.id)
            return res.json(deleted)
        } catch (error) {
            res.json(error)
        }
    },
    async login (req: Request, res: Response){
        try {
            const {email, password} = req.body
            const islogged = await UserService.login(email, password)
            if(islogged){
                const secretKey = process.env.SECRET_KEY
                if(secretKey){
                    const token = jwt.sign({user: islogged}, secretKey, {expiresIn: "3200s"})
                    return res.json({token})
                }else{
                    return res.json({msg: "Erro no token"})
                }
            }else{
                return res.json({msg:"ERROR"})
            }
        } catch (error) {
            res.json(error)
        }
    }
}
export default UserController