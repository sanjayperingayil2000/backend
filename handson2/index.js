const express = require("express");


const app = express();

app.get('/api/main', function(req, res){
    console.log(req);
    res.send({message: "Express.js is a web application framework for Node.js, designed for building web applications and APIs. It is a minimal and flexible framework that provides a set of features for web and mobile applications. Some of the features of Express.js include routing, middleware, template engines, and the ability to connect to a database. It is a popular choice for building back-end services for web and mobile applications."});
    res.end();
})

app.listen(5050, function(){
    console.log("Server is started at port 5050");
});