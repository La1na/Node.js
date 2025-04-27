const fs = require('fs')

function logMessage(message) {
    const timestamp = new Date().toISOString();
    const fullMessage = `${timestamp} - ${message}\n`;

    fs.appendFile('log.txt', fullMessage, 'utf-8', (err) => {
        if (err) {
            console.error('Error writing to log.txt', err);
            return;
        }
        console.log('Message successfully written to log.txt');
    });
}

module.exports = {
    logMessage,
};
