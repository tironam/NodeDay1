console.log('Hello World!')

let [ , , op, num1, num2 ] = process.argv
num1 = parseInt(num1)
num2 = parseInt(num2)
// let op = process.argv[2]
// let num1 = parseInt(process.argv[3])
// let num2 = parseInt(process.argv[4])

const adder = (a, b) => {
    return a + b 
}
const subtracter = (a, b) => {
    return a - b
}
const multiplier = (a, b) => {
    return a * b
}
const divider = (a, b) => {
    return a / b
}
const modulus = (a, b) => {
    return a % b
}

switch (op) {
    case 'add': 
        console.log(adder(num1, num2))
        break
    case 'subtract': 
        console.log(subtracter(num1, num2))
        break
    case 'multiply':
        console.log(multiplier(num1, num2))
        break
    case 'divide':
        console.log(divider(num1, num2))
        break
    case 'modulus':
    console.log(modulus(num1, num2))
        break
}