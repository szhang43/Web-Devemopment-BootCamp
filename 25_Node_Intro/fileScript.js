const fs = require("fs"); 
const folderName = process.argv[2] || "UntitledProject";

try{
    fs.mkdirSync(folderName);
    // fs.writeFileSync(`${folderName}/index.js`, "");
    fs.writeFileSync(`${folderName}/.gitignore`, "node_modules/")

}catch(error){
    console.log("There was an error :", error);
}
