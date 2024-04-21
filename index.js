// npm init                         # create a JSON file
// npm i uuid                       # install uuid. UUID (Universal Unique Identifier) is a 16-byte unique value
// npm install --save -dev nodemon  # install node_module package 
// npm install                      # reinstall node_modules 


// Test Terminal with simple console.log
// console.log('Hello From Node.js...')

// ------------------- [ 01: First try ]
// const person = require(`./person`);
// console.log(person.name);

// ------------------- [ 02: Second try ]
// const Person = require("./person");
// const person1 = new Person('John Doe', 30);
// person1.greeting();

// ------------------- [ 03: Third try ]
// const Person = require("./person");  // --> This method is common js. 
// import Person from './person'; // ***  Why we are not using this yet?? Because Node has not implemented it yet. 
// this has not been perfected yet in node. 

// const person1 = new Person('John Doe', 30);
// person1.greeting();

// ------------------- [ Review some of node core modules ]
// Path module: https://nodejs.org/docs/latest/api/path.html

// const Logger = require('./reference/logger');

// const logger = new Logger();

// logger.on('message', (data) => console.log('Called Listener', data));

// logger.log('Hello World');
// logger.log('Hello World');
// logger.log('안녕');

// **************************************************************** //
// If use express, make things a lot easier.

// const http = require('http');
// const path = require('path');
// const fs = require('fs');

// const server = http.createServer((req, res) => {
//     // console.log(req.url);
//     if(req.url === '/'){
//         res.writeHead(200, { 'content-type': 'text/html' });
//         res.end('<h1>Homepage</h1>');
//     }
// });

// // Give environmental variable 
// const PORT = process.env.PORT || 3000;

// server.listen(PORT, () => console.log(`Server running on port ${PORT}`));


// **************************************************************** //
// Create a new application with Traversy! 

const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
    // // console.log(req.url);
    // if(req.url === '/'){
    //     fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
    //         if (err) throw err;
    //         res.writeHead(200, { 'content-type': 'text/html' });
    //         res.end(content);
    //     })
    // }

    // // load about.html
    // // if(req.url === '/about'){
    // //     fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, content) => {
    // //         if (err) throw err;
    // //         res.writeHead(200, { 'content-type': 'text/html' });
    // //         res.end(content);
    // //     })
    // // }

    // // json data example
    // if(req.url === '/api/users'){
    //     const users = [
    //         { name: 'Bob Smith', age: 40},
    //         { name: 'Bob Smith', age: 30}
    //     ]
    //     res.writeHead(200, { 'content-type': 'application/json' });
    //     res.end(JSON.stringify(users));
    //     }

    // --------- [ Above code is not efficient: Build file path ]
    // Dynamic file path would solve the problem 

    // --------- * Build file path *
    let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);
    // console.log(filePath)
    // res.end();

    // --------- * Extension of file *
    let extname = path.extname(filePath);

    // --------- * Initial content type *
    let contentType = 'text/html';

    // Check ext and set content type
    switch(extname) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpeg'; // Corrected content type for JPEG images
            break;
    }

    // Read File
    fs.readFile(filePath, (err, content) => {
        if(err) {
            if(err.code === 'ENOENT') {    
                // Page not found
                fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) => {
                    res.writeHead(404, { 'Content-Type': 'text/html' });
                    res.end(content, 'utf8');
                });
            } else {
                // Some server error
                res.writeHead(500);
                res.end(`Server Error: ${err.code}`);
            }
        } else {
            // Success
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf8');
        }
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));