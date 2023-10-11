var figlet = require("figlet");
var colors = require("colors");

figlet("Hello World!!", function (err, data) {
  if (err) {
    console.log("Something went wrong...", err);
  }
  console.log(data.rainbow);
});