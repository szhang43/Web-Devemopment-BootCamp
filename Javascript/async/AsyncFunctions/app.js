import { ColorChange} from './CreatePromise/app.js'

async function hello(){
    return "Hello";
}

const sing = async () =>{
    throw "I can't sing!";
    return "LA LA LA LA";
}

sing()
    .then((data) => {
        console.log("Promised resolved with:", data);
    })
    .catch((error) => {
        console.log("Uh Oh,", error);
    })

const login = async (username, password) => {
    if(!username || !password){
        throw "Error: Missing Credentials";
    }
    if(password === "corgi"){
        return `Welcome, ${username}!`;
    }
}

login("kiki", "corgi")
    .then((data) => {
        console.log(data);
    })


    