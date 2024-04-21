const EventEmitter = require('events');
const uuid = require('uuid'); // --> It creates unique id. 

// console.log(uuid.v4());

class Logger extends EventEmitter {
    log(msg) {
        // Call event
        this.emit('message', { id: uuid.v4(), msg })
    }
}

// module.exports = Logger; //--> Either exporting it or use the below code:

const http = require('http');

// Create server object
http.createServer((req, res) => {
    // Write response
    res.write('Hello World');
    res.end();
})
.listen(5000, () => console.log('Server running...'));