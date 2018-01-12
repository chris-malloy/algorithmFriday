var fs = require('fs');
const args = process.argv;
var fileContents = fs.readFileSync(args[2], 'utf8', (err, data) => {
    if (err)
        throw err;
    return data;
});
fs.writeFileSync(args[3], fileContents, 'utf8', (err) => {
    if (err) {
        throw err;
    }
})
console.log(fileContents);