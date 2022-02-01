//JS by default does not have any APIs or support of IO operations. This includes File, database, Ports and many other where apps need to either store or send info to other apps or devices. 
//With Nodejs fs module, we can now interact with files using JS. 
//fs is the name of the Nodejs module to get all APIs required for File System. This includes File reading, writing, appending and many more. 
//Only for Custom modules we use ./, the predefined modules of Nodejs can be refered directly.
const fs = require('fs')
////////////////////////Read the file synchronously////////////////////////
//const data = fs.readFileSync('./../Notes.txt', 'utf8')
//console.log(data);
/////////////////////Read the file Asynchronously////////////////
// const filename = './../Notes.txt'
// //3rd arg called as callback function will be triggered by the nodjes after the complete reading of the file. If there is an error in the file reading, it will invoke the function with error info passed as the 1st arg, else it will pass the contents of the file as 2nd arg. 

// fs.readFile(filename, 'utf8', (err, data)=>{
//     if (err != null) 
//         console.log(err.message);
//     else 
//         console.log(data);
// });
// console.log("Some code is written after the read file function");
//////////////////////Writing the contents into a file///////////////////////
const filename = "Sample.txt"
//fs.writeFileSync(filename, "Some content to be written to the file. ", 'utf8'); 
/////////////////////Appending the contents into a file using fs.open/////////////////////////
fs.open(filename, 'a+', (err, fd)=>{
    let content = "Some data to append to the file";
    fs.write(fd, content, (e, written, buffer)=>{
        if(e != null){
            console.log(e.message);
        }else{
                fs.close(fd, ()=>{
                console.log("File appended successfully");
                })
         }
    })
})
//Explore other flags provided by fs to read, write and append. Also explore the fs.appendFile API which is more improvised version of file appending. This function came from 6.x onwards. 
