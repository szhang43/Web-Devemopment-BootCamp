const arr = [1, 2, 3, 4, 5, 6, 7]; 

arr.forEach(function(element){
    console.log(element);
});

for(let element of arr){
    console.log(element);
}

const movies = [
    {
        title: "Amadeus",
        score: 99
    },
    {
        title: "Parasite",
        score: 90
    },
    {
        title: "Stand By Me",
        score: 85
    },
    {
        title: "Black Panther",
        score: 80
    }

];

movies.forEach(function(movie){
    console.log(`${movie.title} : ${movie.score}/100`);
})