// import {createServer} from "http"
// import fs from "fs"

// const server = createServer((req,res)=>{
//  const data =  fs.readFile("./myName.txt", (err,data)=>{
//   res.writeHead(200, {'Content-Type': 'text/html'});
//    res.write(data)
//    return res.end();
//  });
// }).listen(3000, ()=>{
//   console.log("server listening on http://localhost:3000")
// })


//Reading File
// import fs from "fs"

// const dataToRead = fs.readFile("./myName.txt", (err,data)=>{
//   if(err){
//     console.log("error reading file",err)
//   }
//   else{
//     console.log("file read successfully",data.toString())
//   }
// })

// Append file 
// import fs from "fs"
//  const dataToAppend = fs.appendFile("./myName.txt"," Mein Code hun", (err)=>{
//   if(err){
//     throw error
//   }
//   else {
//     console.log(data)
//   }
//  })

// File open
// import fs from "fs"
// const fileToOpen = fs.open("./gamer.txt","w",(err)=>{
//   if(err) throw err
//   console.log("saved")
// })

// write file 
// import fs from "fs"
// const writeIntoFile = fs.writeFile("./myName.txt","Mein Coder hun", (err)=>{
//   if(err) throw err
//   console.log("done")
// })

// Rename file 
import fs from "fs"
const renameFile = fs.rename("./myName.txt","MeraNaam.txt",(err)=>{
  console.log("renamed")
})