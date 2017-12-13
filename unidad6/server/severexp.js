var express = require("express"),
    http=require("http"),
    app,
//se crea servidor
    app=express();
http.createServer(app).listen(3000);
//configurar rutas
app.get('/hello',function (req,res) {
    res.send("Hello world!\n");
});
app.get('/goodbye',function (req,res) {
    res.send("Adios!\n");
});
app.get('/',function (req,res) {
    res.send("This is the root route!\n");
});
app.get('/index.html',function (req,res) {
    res.send("<html><head></head><body><h1>Hello world!</h1></body></html>");
});
console.log("Server running on port 3000");


