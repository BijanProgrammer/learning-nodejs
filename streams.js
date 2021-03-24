const fs = require('fs');

const readStream = fs.createReadStream('./data/huge_input_file.txt', {encoding: 'utf8'});
const writeStream = fs.createWriteStream('./data/huge_output_file.txt');

// normal way
readStream.on('data', (chunk) => {
    console.count('new chunk ...');
    console.log(chunk);
    
    writeStream.write('\n' + '-'.repeat(30) + ' new chunk ...' + '\n');
    writeStream.write(chunk);
});

// piping
readStream.pipe(writeStream);
