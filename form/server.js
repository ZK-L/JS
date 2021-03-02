const http = require("http");

const hostname = "192.168.1.8";
const port = 5500;

const server = http.createServer((req,res)=>{
    req.on('data', chunk => {
        console.log(`Data chunk available: ${chunk}`)
      })
      req.on('end', () => {
        //end of data
      })
    
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("hello world");
});


server.listen(port,hostname,()=>{
    console.log("server running at http://${hostname}:${port}/");
});