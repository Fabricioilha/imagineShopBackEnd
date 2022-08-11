
import { UserModel } from "../database/schemas/userSchema";
import { updateUserType, UserType } from "../types/types";

export const UserService = {
    add: async (user:UserType) => {
        try {
            await UserModel.create(user)
        } catch (error) {
            return error           
        }
    },
    readById: async (id: string) => {        
        try {
            const user = await UserModel.findById(id)
            return user
        } catch (error) {
            return error
        }
    },
    readAll: async () => {
        try {
            const allUsers = await UserModel.find()
            return allUsers
        } catch (error) {
            return error
        }
    },
    update: async (data: updateUserType)=>{
        try {
            const updated = await UserModel.updateOne({_id: data.id},data.body)
            return updated
        } catch (error) {
            return error
        }
    },
    delete: async (id: string) => {
        try {
            const deleted = await UserModel.deleteOne({_id: id})
            return deleted
        } catch (error) {
            return error
        }
    },
    findByEmail: async (email:string) => {
        return await UserModel.findOne({email})
    },
    login: async (email:string, password: string) => {
        if(email && password){
            const user = await UserService.findByEmail(email)
            if(user){
                const auth = user.password === password
                if(auth){
                    return user
                }else{
                    return null
                }
            }else{
                return null
            }
        }else{
            return null
        }
    }
}