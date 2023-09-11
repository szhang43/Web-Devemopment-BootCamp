// Define a function called fakeRequestPromist that simulates an asynchronous request
const fakeRequestPromise = (url) => {
    // Return a Promise that resolves or rejects after a random delay
    return new Promise((resolve, reject) => {
        // Generate a random delay between 500ms and 5000ms
        const delay = Math.floor(Math.random() * 4500) + 500;
        // Use setTimeout to simulate the delay
        setTimeout(() => {
            // If the delay is greater than 4000ms, reject the Promise
            if (delay > 4000) {
                reject("Connection Timeout:(");
            } else {
                // Otherwise, resolve the Promise with a success message
                resolve(`Here is your fake data from ${url}`);
            }
        }, delay);
    });
}

// Start a chain of Promises to simulate multiple requests
fakeRequestPromise('yelp.com/api/coffee/page1')
    .then((data) => {
        // Log a success message when page 1 data is successfully retrieved
        console.log("page 1 data successfully retrieved");
        // Return another Promise for the next request
        return fakeRequestPromise('yelp.com/api/coffee/page2');
    })
    .then((data) => {
        // Log a success message when page 2 data is successfully retrieved
        console.log("page 2 data successfully retrieved");
        // Return another Promise for the next request
        return fakeRequestPromise('yelp.com/api/coffee/page3');
    })
    .then((data) => {
        // Log a success message when page 3 data is successfully retrieved
        console.log("page 3 data successfully retrieved");
        // Return another Promise for the next request
        return fakeRequestPromise('yelp.com/api/coffee/page4');
    })
    .then((data) => {
        // Log a success message when page 4 data is successfully retrieved
        console.log("page 4 data successfully retrieved");
        // Return another Promise for the final request
        return fakeRequestPromise('yelp.com/api/coffee/page5');
    })
    .catch((error) => {
        // If any request is rejected, log a generic error message
        console.log("Request rejected...");
    })
