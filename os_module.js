const os = require("os")

// 1.  get the os plateform and user info 
// return the operating system platefom eg (win32,linux,darwin)

console.log("platform",os.platform());
console.log("userinfo",os.userInfo());
console.log("CPU Architecture",os.arch());
console.log("free memory",os.freemem(),"bytes");
console.log("total memory",os.totalmem(),"bytes");
console.log("system uptime",os.uptime(),"seconds");
console.log("Home Derectory",os.homedir());


console.log('OS Type:', os.type());
console.log('CPU Details:', os.cpus());
console.log('Network Interfaces:', os.networkInterfaces());
console.log(os.version());

console.log(JSON.stringify(`Line 1${os.EOL}Line 2`));
console.log(os.constants); // Example: { signals, errno }
console.log(os.tmpdir()); // Example: '/tmp'
console.log(os.release()); // Example: '10.0.19042'
console.log(os.loadavg()); // Example: [ 0.11, 0.22, 0.33 ]
console.log(os.hostname()); // Example: 'my-computer'
console.log(os.endianness()); // Example: 'LE'






