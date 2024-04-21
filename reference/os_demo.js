// OS gives information about our environment and operating system.
// This will helps us to build an app with the system.  

const os = require('os');

// Platform
console.log(os.platform());  //--> This will give a result "darwin" in console.

// CPU Arch
console.log(os.arch());

// CPU Core Info
console.log(os.cpus());

// Free memory
// console.log(os.freemen());  --> Unsure why this gives error. 
console.log(os.freemem());

// Total memory
console.log(os.totalmem());

// Home dir
console.log(os.homedir());

// Uptime
console.log(os.uptime());
