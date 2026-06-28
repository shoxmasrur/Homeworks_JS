const obj = {
    name:"Aziz", 
    age: 32,
    address: "Toshkent"
}

const descriptors = Object.getOwnPropertyDescriptors(obj)
console.log(descriptors)