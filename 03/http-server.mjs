import {createServer } from "http"

const server = createServer((req,res)  => {
    if(req.url === "/"){
        res.writeHead(200,{"Content-type":"text/plain"})
        res.end("welcome to home page")
    }
    else if (req.url === "/about"){
        res.writeHead(200,{"Content-type" : "text/plain"})
        res.end("This is about page")
    }
    else if (req.url === "/services"){
        res.writeHead(200,{"Content-type" : "text/plain"})
        res.end("This is services page ")
    }
    else {
        res.writeHead(404,{"Content-type": "text/plain"})
        res.end("404 not found")
    }
})

server.listen(3000,() => {
    console.log("Server is running on port 3000")
})