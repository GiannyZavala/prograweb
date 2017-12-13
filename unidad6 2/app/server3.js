/*Servidor en puerto 300

 */

var express = require("express"),
    http= require("http"),
    app;



app=express();
http.createServer(app).listen(3000);



app.get('/hello', function (req,res){
    res.send("Hola Mundo");
});



app.get("/goodbye", function (req,res) {
    res.send("Adios");



    app.get("/", function(req,res){
        res.send("This is the root route")
    });
});
   console.log("Server running on port 3000")