/**
 * Created by Mannlex21 on 06/12/16.
 */
var mongodb = require('mongodb');
var uri = 'mongodb://localhost:27017/tareas';
mongodb.MongoClient.connect(uri,function (error,db) {
    if (error){
        console.log(error);
        process.exit(1);
    }
    var doc= {
        tarea:"Aprender HTML"
    };
    db.collection('tareas').insert(doc,function (error,result) {
      if (error){
          console.log(error);
          process(1);
      }

      db.collection('tareas').find().toArray(function (error,tareas) {
           if (error){
               console.log(error);
               process.exit(1);
           }
           console.log('Tareas encontradas');
          tareas.forEach(function (tarea) {
            console.log(JSON.stringify(tarea));
          });
          process.exit(0);
      });
    });
});