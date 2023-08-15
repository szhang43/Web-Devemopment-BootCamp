const anime = ["Fairy Tail", "Haruhi", "Dororo", "Jujitsu Kaisen"];

anime.map(function(element){
    console.log(element);
})

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


const goodMovies = movies.filter(movie =>{
    return movie.score > 80;
})

const goodMovieTitles = goodMovies.map(m => m.title);

const username = ['mark', 'staceysmom1978', 'q29832128238983', 'carrie98', 'MoanaFan']

function validUserNames(usernames) {
    // your code here
    console.log(usernames);
    return usernames.filter(name =>{
        return name.length < 10;
    })
}

const valid = username.filter(name =>{
    return name.length < 10;
})


const scores = [80, 81, 85, 98, 99, 92, 87, 90, 93]; 
scores.every(score => score > 80 )


const prices = [9.88, 7.99, 2.50, 3.50, 10.99, 23.99, 24.96]
count = 0
for(let i = 0; i < prices.length; i++){
    count += prices[i];
}
const total = prices.reduce((count, total) =>{
    return count + total
})    


const minPrice = prices.reduce((min, nextprice) => {
    if( min > nextprice){
        return nextprice;
    }
    return min;
})