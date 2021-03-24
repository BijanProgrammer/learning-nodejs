const fs = require('fs');

// utils
const printErrorOrMessage = (err, message) => {
    if (err) {
        console.log('Error:', err);
        return;
    }
    
    console.log(message);
};

// reading files
fs.readFile('./data/input.txt', (err, data) => {
    printErrorOrMessage(err, data.toString());
});

// writing files
fs.writeFile('./data/output.txt', 'Hello, friend!', (err) => {
    printErrorOrMessage(err, 'Successfully wrote data into the output file.');
});

// removing files
const filePath = './data/removable.txt';
if (fs.existsSync(filePath)) {
    fs.unlink(filePath, (err) => {
        printErrorOrMessage(err, 'Successfully removed the file.');
    });
} else {
    console.log('The file does not exists.');
}

// directories
const directoryPath = './data/posts';
if (fs.existsSync(directoryPath)) {
    console.log('The directory already exists.');
    
    fs.rmdir(directoryPath, (err) => {
        printErrorOrMessage(err, 'Successfully removed the directory.');
    });
} else {
    fs.mkdir(directoryPath, (err) => {
        printErrorOrMessage(err, 'Successfully made the directory.');
    });
}
