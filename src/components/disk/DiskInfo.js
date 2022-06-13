var execSync = require('child_process').execSync;

const cmd = "echo '12345' | sudo ./root/cli64 disk info";

var child = execSync(cmd);
module.exports.obj = JSON.parse(child);
// return obj
