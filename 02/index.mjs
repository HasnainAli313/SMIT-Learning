import {createServer} from "http"

const server = createServer((req,res) => {
  
  res.end("hello developers!")
})

server.listen(3000,() => {
  console.log("Server is running on port 3000")
})
