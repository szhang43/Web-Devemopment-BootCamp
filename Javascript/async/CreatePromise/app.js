const fakeRequest = (url) =>{
    return new Promise((resolve, reject)=>{
        const rand = Math.random();
        setTimeout(() => {
            if(rand < 0.7){
                resolve("Data retrieved successfully!");
            }else{
                reject("Request Rejected!")
            }
        }, 1000);
    })
}

fakeRequest("/username/1")
    .then(() => {
        console.log('Done with request!');
    }) 


// Color Change Pratice

const ColorChange = (color) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, 1000);
    })
}


ColorChange("#EF9595")
    .then(() => {
        return ColorChange("#EFB495");
    })
    .then(() => {
        return ColorChange("#EFD595");
    })
    .then(() => {
        return ColorChange("#EBEF95");
    })
    .then(() => {
        return ColorChange("#FFCC70");
    })
    .catch((error)=>{
        console.log("There was an error...")
    })