//import modules
//require() function used to import the modules
const express = require("express");
const mongodb = require("mongodb");
const cors = require("cors");


//create the rest object
const app = express();
//where "app" is the rest object


//enable cors policy
app.use(cors());


//set the json as MIME Type
app.use(express.json());


//create the reference variable to connect to mongodb database
const refVar = mongodb.MongoClient;



//create the rest api
app.get("/products",(req,res)=>{
    refVar.connect(`mongodb+srv://admin:admin@cluster0.jgnmk.mongodb.net/ecommerce?retryWrites=true&w=majority`,(err,connection)=>{
        if(err) throw err;
        else{
            const db = connection.db("ecommerce");
            db.collection("products").find().toArray((err,array)=>{
                if(err) throw err;
                else{
                    res.send(array);
                }
            })
        }
    });
});


//assign the port number
let port = process.env.PORT || 1234;
app.listen(port,()=>{
    console.log("server listening the port number 1234");
});
