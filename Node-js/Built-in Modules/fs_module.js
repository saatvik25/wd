const fs = require('fs');


//read file function

// ASynchronous read file system

fs.readFile("file.txt" , "utf8", (err , data)=>{
    console.log(err, data);
});
console.log("finished reading file");



// Synchronous read file system

const a  = fs.readFileSync("file.txt", "utf8");

console.log(a);

console.log("finished reading file");


// write file function

fs.writeFile("file2.txt" , "this is  a data of file 2 " , ()=>{
    console.log("finished");
});

console.log("finished writing file");


// ASynchronous write file system
fs.writeFileSync("file2.txt" , "this is  a data of file 2 " , ()=>{
    console.log("finished");
});

console.log("finished writing file");
