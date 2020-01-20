var express = require("express");
var router = express.Router();

//get helo pages

//railsで言うところのcontrollersのような感じ
router.get("/",function(req,res,next){
    //helo.ejsに渡すメソッド
    res.render("helo",{
        title:"helo",
        data:{
            "taro1":"taro1@yamada",
            "taro2":"taro2@yamada",
            "taro3":"taro3@yamada"
        }
    });
});

module.exports = router;