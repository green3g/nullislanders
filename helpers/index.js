/*
  This is a file of data and helper functions that we can expose and use in our templating function
*/

// FS is a built in module to node that let's us read files from the system we're running on
const fs = require('fs')

// Dump is a handy debugging function we can use to sort of "console.log" our data
exports.dump = obj => JSON.stringify(obj, null, 2)

// inserting an SVG
exports.icon = name => fs.readFileSync(`./public/images/icons/${name}.svg`)

// Some details about the site
exports.siteName = 'Nullislanders'

// Capture the pure host of user-uri
exports.regex = {
  webHost: /^(https{0,1}:\/\/){0,1}(.+\.)*(.+\.[a-zA-Z]{2,})\/.*$/,
  // eslint-disable-next-line
  validURI: /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(:[0-9]+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/,
}
