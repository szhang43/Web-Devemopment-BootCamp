const fs = require("fs"); 
// console.log(fs);

const folderName = process.argv[2] || "UntitledProject";


// fs.mkdir('tmp/a/apple', {recursive: true}, (err) => {
//     if(err) throw err;
// });

try{
    fs.mkdirSync(folderName);
    fs.writeFileSync(`${folderName}/index.html`, "")
    fs.writeFileSync(`${folderName}/app.js`, "/* Your Javascript Code goes here */")
    fs.writeFileSync(`${folderName}/style.css`, "/* Write your styles here */")
}catch(error){
    console.log("There was an error :", error);
}

