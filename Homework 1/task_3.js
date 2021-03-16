import * as process from "process";
import * as fs from "fs";
import csv from "csvtojson"

/* 1 */
process.stdin.setEncoding('utf8');

process.stdin.on('readable', () => {
    const chunk = process.stdin.read();
    if (chunk !== null) {
        const result = chunk.split('').reverse().join('');
        process.stdout.write(result);
    }
});


/* 2 */
const csvFilePath = './csv/task_2.csv';

const writeStream = fs.createWriteStream('stream_3.txt', {
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
