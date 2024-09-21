import {createServer} from 'http';

const server = createServer((req,res)=>{
    let parseURL = new URL(req.url,`http://${req.headers.host}`)

    let relativePath = parseURL.pathname;

    res.end(relativePath)
    
})

server.listen(3000,()=>{    
    console.log("http://localhost:3000")
})