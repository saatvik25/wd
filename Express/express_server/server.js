//jshint esversion:5

const  response  = require("express");
const express = require("express");
const app = express();
//listen is a method used to listen request on port 3000 that is send to server
app.get("/",function(request,response){
   response.send("<h1>This app starts a server and listens on port 3000 for connections. The app responds with “Hello World!” for requests to the root URL (/) or route. For every other path, it will respond with a 404 Not Found.The example above is actually a working server: Go ahead and click on the URL shown. You’ll get a response, with real-time logs on the page, and any changes you make will be reflected in real time. This is powered by RunKit, which provides an interactive JavaScript playground connected to a complete Node environment that runs in your web browser. Below are instructions for running the same app on your local machine. <br> HELLO WORLD !</h1>");
});
app.get("/contact",function(req,res){
    res.send(" you an contact me at : saatviksrivastva25@gmail.com")
})

app.get("/about",function(req,res){
res.send('<h2>this is about page <br> MY NAME IS SAATVIK SRIVASTAVA </h2>')
})


//to sent whole html file 
app.get("/form",function(req,res){
    res.sendFile(__dirname + "/index.html")
})




app.listen(3000,function(){
    console.log("server started on port 3000")
});