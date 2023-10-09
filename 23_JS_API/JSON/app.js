// JSON data as a string
const data = `{
    "user": "CryptoTrader",
    "portfolio": {"BTC": 2.5, "ETH": 15.3, "XRP": 500, "LTC": 8.7},
    "preferences": {"theme": "light", "notifications": true},
    "crypto_data": [
      {"symbol": "BTC", "price_usd": 45000.25},
      {"symbol": "ETH", "price_usd": 3500.75},
      {"symbol": "XRP", "price_usd": 1.25},
      {"symbol": "LTC", "price_usd": 150.00}
    ]
}`; 

// Parsing JSON data (converting from string to JavaScript object)
const parseData = JSON.parse(data);
console.log(parseData);

// JavaScript object representing a dog
const dog = {
    breed : "lab", 
    color : "black", 
    age : 5, 
    owner : undefined
}

// Converting a JavaScript object to a JSON string
const stringifyData = JSON.stringify(dog);
console.log(stringifyData);
