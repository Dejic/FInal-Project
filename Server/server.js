const express = require('express')
const app = express()
const cors = require ("cors")
require("dotenv").config()
const db = require('knex')({
    client: 'pg',connection: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        port: process.env.DB_PORT
    }
});

app.use(cors())
app.use(express.json())
app.get("/",async (req,res)=>{
let clientTable=await db("accounts").select()
console.log(clientTable)
    
res.json(clientTable)
})





app.listen(process.env.PORT,()=>console.log(`server is running on ${process.env.PORT}`))