// Import necessary libraries
import { franc } from 'franc'; // Language detection library
import langs from 'langs'; // Language information library
import process from 'process'; // Node.js process library
import colors from 'colors'; // Text colorization library

// Get the user input from the command line
const input = process.argv[2];

// Use 'franc' to detect the language of the user's input
const code = franc(`${input}`);

try {
  if (code == 'und') {
    // If 'franc' couldn't detect the language or the input is too short, display a message in red.
    console.log('Your input is too short or invalid!'.red);
  } else {
    // If 'franc' detected a language code, use 'langs' to get the language name.
    const language = langs.where('3', code);

    if (typeof language !== 'undefined') {
      // If the language is defined, display the best guess in blue.
      const result = language.name.blue;
      console.log(`Our best guess is: ${result}!`);
    } else {
      // If the language is not defined, display a message in red.
      console.log(`We weren't able to guess the language...`.red);
    }
  }
} catch (error) {
  // If there is an error, display the error message in red.
  console.log(`There was an error: ${error}`.red);
}
