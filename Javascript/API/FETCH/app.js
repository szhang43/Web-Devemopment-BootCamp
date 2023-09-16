// Fetch anime data from the TVMaze API
fetch("https://api.tvmaze.com/shows?q=anime") 
    .then(response => {
        // Log that the fetch request was resolved
        console.log("Resolved", response);
        
        // Parse the JSON response data
        return response.json(); 
    })
    .then(data => {
        // Log the JSON data retrieved from the response
        console.log("JSON:", data)
    })
    .catch(error => {
        // Handle any errors that occur during the fetch
        console.log("There was an error...")
    })

// Fetch Star Wars character data from the SWAPI API
fetch("https://swapi.dev/api/people/1") 
    .then(response => {
        // Log that the fetch request was resolved
        console.log("Resolved", response);
        
        // Parse the JSON response data
        return response.json(); 
    })
    .then(data => {
        // Log the first JSON data retrieved from the response
        console.log("JSON I:", data)
        
        // Start a new fetch request for another Star Wars character
        return fetch("https://swapi.dev/api/people/2") 
    })
    .then(response => {
        // Log that the second fetch request was resolved
        console.log("Resolved II:", response);
        
        // Parse the JSON data for the second character
        return response.json();
    })
    .then(data => {
        // Log the JSON data for the second character
        console.log("JSON II:", data);
    })
    .catch(error => {
        // Handle any errors that occur during the fetch
        console.log("There was an error...")
    })

// Fetch cat facts using an async function
const catFacts = async () => {
    try {
        // Fetch a cat fact from the catfact.ninja API
        const response = await fetch("https://catfact.ninja/fact");
        
        // Parse the JSON response data
        const fact = await response.json();
        
        // Log the first cat fact
        console.log("FACT: ", fact.fact);

        // Fetch another cat fact
        const response2 = await fetch("https://catfact.ninja/fact");
        
        // Parse the JSON response data for the second cat fact
        const fact2 = await response2.json();
        
        // Log the second cat fact
        console.log("FACT: ", fact2.fact);
    } catch(error) {
        // Handle any errors that occur during the fetch
        console.log("Error: ", error);
    }
}

// Call the catFacts function to retrieve and log cat facts
catFacts();


