const fs = require('fs')

// writes a file and places text on it
fs.writeFile('some.txt', 'Hello World!', err => {
    if (err) {
        console.log(err)
    }
})

fs.appendFile('some.txt', 'Goodbye World!', err => {
    if (err) {
        console.log(err)
    }
})

// grab info from an existing file
fs.readFile('some.txt', 'utf8', (err, data) => {
    if (err) {
        console.log(err)
    }
    console.log(data)
})
    