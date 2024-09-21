// Task 1: Read a file using both synchronous and asynchronous methods.
// Compare the behavior and output.

import fs from "node:fs";
import {readFile} from "node:fs/promises";
// Synchronous method
// try{
//     const data = fs.readFileSync("./myName.txt", "utf8");
//     console.log(data)
// }catch(error){
//     console.error("Error reading file:", error);
// }

// Asynchronous method

 setTimeout( async  () => {
    const data = await  readFile("./myName.txt", "utf8");
    console.log("file is read asynchronously ",data)
},2000)

console.log("hello world")


// Task 2: Write a new file with some content, then append additional content
// to the same file.

// Task 3: Delete a file and handle any errors if the file doesn't exist.

