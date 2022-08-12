
import { ProductModel } from "../database/schemas/productSchema";
import { productType } from "../types/types";

export const ProductService = {
    add: async (product: productType) => {
        try {
            await ProductModel.create(product)
        } catch (error) {
            return error           
        }
    },
    readById: async (id: string) => {        
        try {
            const user = await ProductModel.findById(id)
            return user
        } catch (error) {
            return error
        }
    },
    readAll: async () => {
        try {
            const allProducts = await ProductModel.find()
            return allProducts
        } catch (error) {
            return error
        }
    }
}