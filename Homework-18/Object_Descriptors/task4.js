const obj = {
    name: "Aziz",
    age: 32,
    address: "Toshkent"
}

Object.defineProperty(obj, "address", {enumerable:false})
console.log(obj)

