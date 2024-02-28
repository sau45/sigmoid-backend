const express = require("express");
const app=express();
const cors=require("cors");
app.use(cors());
app.use(express.json());
require("dotenv").config();


app.get("/",(req,res)=>{
    try {
        res.json("Hello backend !")
        
    } catch (error) {
        res.json({error:error})
        
    }
})
const port = process.env.PORT || 8080;

app.listen(port,()=>{
    console.log("Server is Listening on port 8080....")
})