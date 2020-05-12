
// Takes whatever's exporting from that file
const movies = require('./movies.js')
const games = require('./games.js')
const songs = require('./songs.js')
const foods = require('./food.js')
let [ , , category, ... itemArray ] = process.argv 
// let item = `${itemArray.join('')}, `

// const category = ['movie', 'food', 'song', 'game']
const { appendFile, readFile } = require('fs')
const { promisify } = require('util')
const readFileSync = promisify(readFile)

console.log(movies, games, songs, foods)

const fs = require('fs')

// fs.writeFile('movies.txt', movies, err => {
//     console.log(err)
// })

// fs.writeFile('foods.txt', foods, err => {
//     console.log(err)
// })

// fs.writeFile('games.txt', games, err => {
//     console.log(err)
// })

// fs.writeFile('songs.txt', songs, err => {
//     console.log(err)
// })
// let movieData = ''

// readFile('movie.txt', 'utf8', (err, data) => {
//     if (err) { console.log(err) }
//     movieData = data
// })

// console.log(movieData)

// if (categories.includes(category)) {
//     fs.appendFile(`${category}.txt`, `${ itemArray.join('') }, `, err => {
//         if (err) { console.log(err) }
//     })
// }

// switch (thing) {
//     case 'movie':
//         fs.appendFile('movies.txt', item, err => {
//             console.log(err)
//         })
//         break
//     case 'game':
//         fs.appendFile('games.txt', item, err => {
//             console.log(err)
//         })
//         break
//     case 'food':
//         fs.appendFile('foods.txt', item, err => {
//             console.log(err)
//         })
//         break
//     case 'song':
//         fs.appendFile('songs.txt', item, err => {
//             console.log(err)
//         })
//         break
// }