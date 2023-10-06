// Extend the String prototype to add a 'yell' method.
String.prototype.yell = function(){
    // Convert the string to uppercase and add exclamation marks for emphasis.
    return `OMG, ${this.toUpperCase()}!!!!! AGHGHGHGHG!`;
};

// Function to convert RGB components to a hexadecimal color code.
function hex(r, g, b){
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

// Function to create an RGB color representation string.
function rgb(r, g, b){
    return `rgb(${r} ${g}, ${b})`;
}

/* ================ Factory Functions ===========*/

// Function to create a color object with RGB and hexadecimal methods.
function makeColor(r, g, b){
    // Create an empty 'color' object to store color properties.
    const color = {};
    
    // Assign the RGB components as properties of the 'color' object.
    color.r = r;
    color.g = g; 
    color.b = b;
    
    // Define an 'rgb' method that returns the RGB representation of the color.
    color.rgb = function() {
        // Destructure 'r', 'g', and 'b' properties for clarity and return the RGB string.
        const {r, g, b} = this; // Making sure the correct object is being access for future updates
        return `rgb(${r} ${g}, ${b})`;
    }
    
    // Define a 'hex' method that returns the hexadecimal representation of the color.
    color.hex = function() {
        // Destructure 'r', 'g', and 'b' properties for clarity and return the hexadecimal string.
        const {r, g, b} = this;
        return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }
    
    // Return the 'color' object with RGB and hexadecimal methods.
    return color;
}

// Create instances of color objects using the 'makeColor' function.
const navColor = makeColor(230, 126, 34);
const logoColor = makeColor(46, 204, 113);

// Constructor function for creating Color objects
function Color(r, g, b) {
    // Initialize the color object with red (r), green (g), and blue (b) components
    this.r = r; 
    this.g = g; 
    this.b = b;
}

// Prototype method to get the RGB representation of the color
Color.prototype.rgb = function() {
    // Destructure 'r', 'g', and 'b' properties for clarity and return the RGB string
    const { r, g, b } = this;
    return `rgb(${r} ${g}, ${b})`;
}

// Prototype method to get the hexadecimal representation of the color
Color.prototype.hex = function() {
    // Destructure 'r', 'g', and 'b' properties for clarity
    const { r, g, b } = this;
    // Convert the RGB components into a hexadecimal color code
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

// Prototype method to get the RGBA representation of the color with an optional alpha (a) value
Color.prototype.rgba = function(a = 1.0) {
    // Destructure 'r', 'g', and 'b' properties for clarity
    const { r, g, b } = this;
    // Return the RGBA string with 'a' as an optional alpha value (default is 1.0 if not provided)
    return `rgba(${r} ${g}, ${b}, ${a})`;
}

// Create a new instance of a Color object with specified RGB components
const color1 = new Color(40, 50, 89);
const color2 = new Color(47, 100, 70);
