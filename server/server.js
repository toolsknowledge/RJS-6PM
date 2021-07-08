//import the node modules
//require() is the predefined function, used to import the modules
const express = require("express");
const cors = require("cors");
const mongodb = require("mongodb");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

//create the reference variable to connect to mongodb database
let sambaIT = mongodb.MongoClient;


app.post("/login",(req,res)=>{
    sambaIT.connect(process.env.CONNECTION_URL,(err,connection)=>{
        if(err) throw err;
        else{
            const db = connection.db("rjs-6pm");
            db.collection("user_details").find({"uname":req.body.uname,"upwd":req.body.upwd})
                            .toArray((err,array)=>{
                if(err) throw err;
                else{
                    if(array.length>0){
                        res.send({"login":"success"});
                    }else{
                        res.send({"login":"fail"});
                    }
                }
            })
        }
    });
});

let port = process.env.PORT || 1234;
app.listen(port,()=>{
    console.log("server started");
});






