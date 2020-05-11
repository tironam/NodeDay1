
// Takes whatever's exporting from that file
let movies = require('./movies.js')
let games = require('./games.js')
let songs = require('./songs.js')
let foods = require('./food.js')
let [ , , thing, item ] = process.argv 

console.log(movies, games, songs, foods)

const fs = require('fs')

fs.writeFile('movies.txt', movies, err => {
    console.log(err)
})

fs.writeFile('foods.txt', foods, err => {
    console.log(err)
})

fs.writeFile('games.txt', games, err => {
    console.log(err)
})

fs.writeFile('songs.txt', songs, err => {
    console.log(err)
})

switch (thing) {
    case 'movie':
        fs.appendFile('movies.txt', item, err => {
            console.log(err)
        })
        break
    case 'game':
        fs.appendFile('games.txt', item, err => {
            console.log(err)
        })
        break
    case 'food':
        fs.appendFile('foods.txt', item, err => {
            console.log(err)
        })
        break
    case 'song':
        fs.appendFile('songs.txt', item, err => {
            console.log(err)
        })
        break
}