var express = require("express");
var app = express();
var port = process.env.PORT || 5000;
app.listen(port,function (){
    console.log("sever is running....");
});
app.use(express.static("public"));

//------------ THANH--------------//

app.get("/home",function (req,res) {
    res.sendFile(__dirname+"/public/home.html")
});
