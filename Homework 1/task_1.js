const process = require('process');

process.stdin.setEncoding('utf8');

process.stdin.on('readable', () => {
    const chunk = process.stdin.read();
    if (chunk !== null) {
        const result = chunk.split('').reverse().join('');
        process.stdout.write(result);
    }
});


