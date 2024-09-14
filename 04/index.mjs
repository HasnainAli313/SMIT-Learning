// import {createServer} from "http"

// const server = createServer((req, res) => {
//     if(req.method === "POST"){
//         res.writeHead(200,{'Content-Type': 'application/JSON'})
//         let data = {name:"Ali",uni :"UOP"}
//         res.end(JSON.stringify(data))
//         res.end("hello world!");
//         }
//         else if (req.method === "DELETE"){
//             res.writeHead(200,{'Content-Type': 'text/plain'})
//             let deleteData = {js:"react",node :"express"}
//             res.end(JSON.stringify(deleteData))
//             res.end("Delete request received!")
//     }
    
// })

// server.listen(3000,()=>{
//     console.log("listening on port 3000 http://localhost:3000")
// })


import { createServer } from "http";

const server = createServer((req, res) => {
    if (req.method === "POST") {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        let data = { name: "Ali", uni: "UOP" };
        res.end(JSON.stringify(data));
    } else if (req.method === "DELETE") {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        let deleteData = { js: "react", node: "express" };
        res.end(JSON.stringify(deleteData));
    } else if (req.method === "GET") {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        let getData = { message: "This is a GET request" };
        res.end(JSON.stringify(getData));
    } else if (req.method === "PUT") {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        let updateData = { message: "This is a PUT request" };
        res.end(JSON.stringify(updateData));
    } else if (req.method === "PATCH") {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        let patchData = { message: "This is a PATCH request" };
        res.end(JSON.stringify(patchData));
    } else {
        res.writeHead(405, { 'Content-Type': 'text/plain' });
        res.end("Method Not Allowed");
    }
});

server.listen(3000, () => {
    console.log("listening on port 3000 http://localhost:3000");
});
