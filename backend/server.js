const express = require("express");
const cors = require("cors");
const mongodb = require("mongodb");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const client = mongodb.MongoClient;

app.get("/products",(req,res)=>{
    client.connect(process.env.CONNECTION_URL,(err,connection)=>{
        if(err) throw err;
        else{
            const db = connection.db("RJS-06");
            db.collection("products").find().toArray((err,array)=>{
                if(err) throw err;
                else{
                    res.send(array);
                }
            });
        }
    });
});

app.listen(process.env.PORT || 8080, ()=>{
    console.log("server listening the port number 8080");
})

