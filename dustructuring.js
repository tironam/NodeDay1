let nums = [1, 2, 3, 4]

// Array destructuring
// assigns these values to the corresponding values in the array
// Pulls apart array and grab different pieces of it
let [ num1, num2, num3, num4 ] = nums

console.log()

let dog = {
    name: 'Beef', 
    age: 2,
    breed: 'chihuahua'
}

// object destructuring
let { name, age, breed } = dog

console.log(name, age, breed)