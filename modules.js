// people
console.log('-'.repeat(30), 'people');

const {people, ages} = require('./people');
console.log('people:', people);
console.log('ages:', ages);

// os
console.log('\n' + '-'.repeat(30), 'os');

const os = require('os');
console.log('os.platform():', os.platform());
console.log('os.homedir():', os.homedir());
