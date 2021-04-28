//***MAP***
//1. Get array of all names
let newArray = characters.map((characters) => {

    return characters.name
})

console.log(newArray)
//2. Get array of all heights
let newArrayAllHeights = characters.map((characters) => characters.height)

console.log(newArrayAllHeights)
//3. Get array of objects with just name and height properties
let nameHeight1 = characters.map((characters) => ({
    name: characters.name, 
    height: characters.height
}))

console.log(nameHeight1)
//4. Get array of all first names
let newArray2 = characters.map((characters) => {

    return (characters.name.split(" ")[0])
})

console.log(newArray2)
