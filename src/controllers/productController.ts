import {Request , Response} from 'express'
import 'dotenv/config'
import { ProductService } from "../services/productService"
import { UserService } from '../services/userService'

const ProductController = {
    async add(req: Request, res: Response){
        try {
            const filename = req.file?.filename
            if(filename){
                const {name, description, price, summary, stock} = req.body
                await ProductService.add({name, description, price, summary, stock, filename})
                return res.json({msg:"Cadastrado com sucesso"})
            }else{
                return res.json({err:"Upload não concluiido"})
            }
        } catch (error) {
            return res.json(error)   
        }
    },
    async readById(req: Request, res: Response){
        try {
            const product = await ProductService.readById(req.params.id)
            return res.json(product)
        } catch (error) {
            return res.json(error)
        }
    },
    async readAll(req: Request, res: Response){
        try {
            const allProducts = await ProductService.readAll()
            return res.json(allProducts)
        } catch (error) {
            return res.json(error)
        }
    },
    // async updateById (req: Request, res: Response){
    //     try {
    //         const data:updateUserType = {
    //             id: req.params.id,
    //             body: req.body
    //         }
    //         const updated = await UserService.update(data)
    //         return res.json(updated)
    //     } catch (error) {
    //         return res.json(error)
    //     }
    // },
    async deleteById (req: Request, res: Response){
        try {
            await ProductService.deleteOne(req.params.id)
            return res.json({msg:"Exluido com sucesso"})
        } catch (error) {
            res.json(error)
        }
    }
}
export default ProductController