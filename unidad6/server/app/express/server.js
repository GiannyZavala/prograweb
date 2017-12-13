var express = require("express"),
    http=require("http"),

//se crea servidor
    app=express();
    var bodyParser = require('body-parser');
app.use(express.static(__dirname+"/cliente"));
app.use(bodyParser.urlencoded({extended:false}));
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
app.get('/tareas',function(req,res){
    var tareas = [{tarea:"Estudiar HTML"},{tarea:"Estudiar CSS"},{tarea:"Estudiar Javascript"},{tarea:"Estudiar MongoDB"}];
    res.json(tareas);
    //console.log(tareas);
});
app.post("/tareas",function(req,res){
    var nuevaTarea = req.body;
    console.log(nuevaTarea);
   console.log("datos");
    res.send({"mensaje":"Se agrego correctamente en el servidor"});
});

console.log("Server running on port 3000");


