import express, { json, Request, Response } from 'express'
import { dbConect } from './database/dbConfig'
import 'dotenv/config'
import Routes from './Routes/Routes'
import cors from 'cors'


const app = express()

const PORT = process.env.PORT

app.use(json())
app.use(cors())
dbConect()

app.use(express.urlencoded({extended: true}))
app.use(Routes)
app.use("/uploads", express.static("uploads")) 

app.use((req: Request, res: Response)=>{
    res.json({msg: "Endpoint não encontrado."})
})

app.listen(PORT,()=>{
    console.log(`Server runing at http://localhost:${PORT}`)
})