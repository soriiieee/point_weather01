var express = require("express");
//template
var ejs = require("ejs");
//application オブジェクトの作成
var app = express();

////////////////
// 1:拡張子　2:callback
app.engine("ejs",ejs.renderFile);

//root documentの表示関数の定義(getの登録)
// 1: path / 2: function(callback)
app.get("/",function(req,res){
    res.render("test.ejs",
    {title: "Test Page",
    content:"this is test."});
    // res.send("hello world");
});

//server 
var server = app.listen(3000,function(){
    console.log("server is running!");
})