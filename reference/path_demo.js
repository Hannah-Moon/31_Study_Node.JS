const path = require('path') // --> It is a core module. I don't have include a file path. It is already included in node. 

// Base file name 
console.log(path.basename(__filename)); // --> If I run node path_demo in the terminal, it will give the result: path_demo.js

// Directory name
console.log(path.dirname(__filename));

// File extension
console.log(path.extname(__filename));

// Create path object
console.group(path.parse(__filename).base);

// Concatenate paths
// ../test/hello.html
console.log(path.join(__dirname, 'test', 'hello.html')) // --> This helps when we have issues with the delimiters. ("delimiters:  A delimiter is one or more characters that separate text strings.")



