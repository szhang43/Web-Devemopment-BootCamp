// Make an HTTP GET request using Axios and handle the response or errors.
axios.get("https://swapi.dev/api/people/1")
    .then(response => {
        console.log("Response: ", response);
    })
    .catch(error => {
        console.log("There was an error...");
        console.log(error)
    })

// Define an asynchronous function called starWars to fetch data for a given character ID.
const starWars = async (id) => {
    try {
        // Make an HTTP GET request to the SWAPI endpoint with the provided ID.
        const response = await axios.get(`https://swapi.dev/api/people/${id}/`);
         
        // Log the data from the successful response.
        console.log(response.data);
    } catch (error) {
        // Handle any errors that occur during the request.
        console.log("There was an error...")
        console.log(error);
    }
}

// Use a for loop to call the starWars function for character IDs 2 through 9.
for (let i = 2; i < 10; i++) {
    starWars(i);
}
// Get references to the HTML button and joke container elements
const btn = document.body.querySelector(".btn"); // Select the button with the class "btn"
const jokeDiv = document.body.querySelector(".joke"); // Select the container for displaying jokes

// Define an asynchronous function to fetch a dad joke from the API
const dadJoke = async () => {
    try{
        // Configure the headers for the Axios request
        const config = { headers: { Accept: 'application/json' } }; // Specify that we expect JSON as the response
        
        // Send an HTTP GET request to the dad joke API and return the joke
        const response = await axios.get("https://icanhazdadjoke.com/", config); // Make a request to the dad joke API
        return response.data.joke; // Extract the joke from the response and return it
    }
    catch(error){
        console.log(`There was an error : ${error}`)
    }
}

// Define an asynchronous function to add a new dad joke to the HTML
const addNewJoke = async () => {
    // Call dadJoke to fetch a new joke from the API
    const joke = await dadJoke(); // Wait for the joke to be fetched before proceeding

    // Create a new list item element for the joke
    const newJoke = document.createElement("LI"); // Create a new list item (LI) element
    
    // Add the fetched joke text to the new list item
    newJoke.append(joke); // Insert the joke text into the new list item

    // Append the new joke to the joke container in the HTML
    jokeDiv.append(newJoke); // Add the new list item to the container, displaying the joke in the HTML
}

// Add a click event listener to the button
btn.addEventListener("click", function(e){
    // Call addNewJoke to fetch and display a new joke when the button is clicked
    addNewJoke(); // Trigger the function to fetch and display a new dad joke
})
