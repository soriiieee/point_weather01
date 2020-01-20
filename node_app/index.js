var server = require("./server3"); //server making
var router = require("./router");
var requestHandlers = require("./requestHandlers");// 

//initial settei
var handle ={} //init
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;


// server start command
server.start(router.route, handle);