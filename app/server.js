var http = require("http");
var fs =  require("fs");

http.createServer(function (req, res){
	if(req.url === "/"){
		res.writeHead(200, {"Content-Type": "text-html"});
		var html = fs.readFileSync(__dirname + "/index.html");
		res.write(html);
		res.end();
	}
	if(req.url === "/api"){
		res.writeHead(200, {"Content-Type": "application/json"});
		var obj = {"content": "Welcome"};
		res.write(JSON.stringify(obj));
	}
}).listen(3000);
