
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
    },
    deleteOne: async (id: string) => {
        try {
            return await ProductModel.deleteOne({ _id: id })
        } catch (error) {
            return error
        }
    },
    sellProduct: async (products: any)=>{
        const product: any = await ProductService.readById(products._id);
        if (product && product.stock > 0) {
            product.stock = product.stock - 1;
            return await ProductModel.updateOne({ _id: (products._id) }, product);
        }
        return null;
    }
}