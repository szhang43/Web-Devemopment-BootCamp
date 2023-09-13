// Define a function fakeRequest that simulates a network request with a random success rate.
const fakeRequest = (url) => {
    // Return a Promise that resolves or rejects after a random delay.
    return new Promise((resolve, reject) => {
        const rand = Math.random();
        setTimeout(() => {
            if (rand < 0.7) {
                resolve("Data retrieved successfully!");
            } else {
                reject("Request Rejected!");
            }
        }, 1000);
    });
}

// Make a fake network request using fakeRequest and handle the result.
fakeRequest("/username/1")
    .then(() => {
        console.log('Done with request!');
    });


// Color Change Practice

// Define a function ColorChange that changes the background color of the document body.
const ColorChange = (color) => {
    // Return a Promise that resolves after changing the background color.
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, 1000);
    })
}

// Chain multiple color changes sequentially using Promises.
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
    // Handle any errors that occur during the color changes.
    .catch((error) => {
        console.log("There was an error???");
    });


// Define an asynchronous function called 'matcha'
async function matcha() {
    // Await the ColorChange function with the color "#94A684"
    await ColorChange("#94A684");
    // Await the ColorChange function with the color "#AEC3AE"
    await ColorChange("#AEC3AE");
    // Await the ColorChange function with the color "#E4E4D0"
    await ColorChange("#E4E4D0");
    // Await the ColorChange function with the color "#FFEEF4"
    await ColorChange("#FFEEF4");
    // After all ColorChange operations are done, return a string
    return "That was the Matcha Platte";
}

// Call the 'matcha' function and attach a 'then' handler
matcha().then(() => {
    console.log("..."); // Log "..." to the console once 'matcha' is completed
})

// The code below is commented out
// async function printMatcha() {
//     await matcha();
//     console.log("End");
// }

// Call the 'printMatcha' function, which is currently commented out
// printMatcha();

//Handling Errors in async functions
async function makeTwoRequests() {
    try {
        // Await the result of the 'fakeRequest' function for "/page1"
        let data1 = await fakeRequest("/page1");
        console.log("Here is data1");

        // Await the result of the 'exampleFunction' for "/page2"
        let data2 = await exampleFunction("/page2");
        console.log("Here is data2");
    } catch (error) {
        // If there's an error in any of the await statements, it will be caught here
        console.log(`There was an error! : ${error}`);
    }
}

// Call the 'makeTwoRequests' function and attach a 'then' handler
makeTwoRequests().then(() => {
    console.log("Completed"); // Log "Completed" when 'makeTwoRequests' is completed
})
