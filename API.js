const express=require("express");
const app=express();
const bodyP=require("body-parser");
app.use(bodyP.json());
app.use("/codemirror",express.static("C:/Users/shrey/OneDrive/Desktop/web development/project/PROJECT 14_CROSSWORD/codemirror"));
app.use("/question.css",express.static("C:/Users/shrey/OneDrive/Desktop/web development/project/PROJECT 14_CROSSWORD/codemirror/questions/question.css"));
app.use("/",function(req,res){
    res.sendFile("C:/Users/shrey/OneDrive/Desktop/web development/project/PROJECT 14_CROSSWORD/questions/question1.html");
})
app.listen(8000);