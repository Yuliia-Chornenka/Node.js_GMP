const fs = require('fs');
const csv = require('csvtojson');
const csvFilePath = './csv/task_2.csv';

const writeStream = fs.createWriteStream('stream_2.txt', {
    flags: 'a'
});

csv({
    delimiter: [';']
})
    .fromFile(csvFilePath)
    .on('error', (err) => {
        console.log('An error occurred while reading the file:', err)
    })
    .subscribe((jsonObj) => {
        const string = JSON.stringify(jsonObj);

        writeStream.write(`${string} \n`);

        writeStream.on('error', (err) => {
            console.log('An error occurred while writing to the file:', err);
        });
    });


/* Second option */
csv({
    delimiter: [';']
})
    .fromFile(csvFilePath)
    .on('error', (err) => {
        console.log('An error occurred while reading the file:', err)
    })
    .subscribe((jsonObj) => {
        const string = JSON.stringify(jsonObj);

        fs.appendFile('append_2.txt', `${string} \n`, function (err) {
            if (err) return console.log('An error occurred while writing to the file:', err);
        });
    });

