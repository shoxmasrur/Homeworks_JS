obj = {
    name: "Azamat",
    age : 55,
    address: "Toshkent"
}

Object.defineProperty(obj, "age", {configurable:false})
console.log(obj)

delete obj.age
console.log(obj)