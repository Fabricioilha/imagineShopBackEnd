import express, { json, Request, Response } from 'express'
import { dbConect } from './database/dbConfig'
import 'dotenv/config'
import routes from './routes'

const app = express()
const PORT = process.env.PORT
app.use(json())

dbConect()

app.use(routes)

app.use((req: Request, res: Response)=>{
    res.json({msg: "Endpoint não encontrado"})
})

app.listen(PORT,()=>{
    console.log(`Server runing at http://localhost:${PORT}`)
})