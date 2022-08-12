import express, { json, Request, Response } from 'express'
import { dbConect } from './database/dbConfig'
import 'dotenv/config'
import userRoutes from "./Routes/userRoutes"
import UserController from './controllers/userController'
import productRoutes from './Routes/productsRoutes'

const app = express()
const PORT = process.env.PORT
app.use(json())
dbConect()

app.post("/login", UserController.login)

app.use(userRoutes)
app.use(productRoutes)


app.get("/teste",(req,res)=>{
    res.send("Passou pelo middleware")
})

app.use((req: Request, res: Response)=>{
    res.json({msg: "Endpoint não encontrado"})
})

app.listen(PORT,()=>{
    console.log(`Server runing at http://localhost:${PORT}`)
})