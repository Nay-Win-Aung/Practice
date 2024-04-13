//import express
const express = require("express");
//create app
const app = express();
//defining routes with get request handler
app.get ("/api/nay",function (req,res){

    const data = [
        {name:"nay"},
        {age:41}
    ];
    return res.status(200).json(data);
});
//app.listen
app.listen (8000,function(){
    console.log ("server is running")
})