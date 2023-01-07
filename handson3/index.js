const express = require("express");
const app = express();

const firstMiddleware=(req,res,next)=>{
    console.log("we are executing the firstMiddleware function.")
    next()
}

const secondMiddleware=(req,res,next)=>{
    console.log("this is the second middleware.")
    next()
}

app.use(firstMiddleware);

app.get('/home',secondMiddleware, function(req, res){
    res.send({message: "hii everyone...this is home page.have both middleware"});
})
app.get('/about', function(req, res){
    res.send({message: "this about page..which contain only first middleware"});
})
app.get('/courses',secondMiddleware, function(req, res){
    res.send({message: "this the course page.have both middleware"});
})

app.listen(5080, function(){
    console.log("Server is started at port 5080");
});