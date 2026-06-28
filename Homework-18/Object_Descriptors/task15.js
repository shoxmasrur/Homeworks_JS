const obj = {
    name:"Aziz",
    age:32
}
Object.seal(obj);

obj["address"] = "Toshkent"
console.log(obj)
obj["name"] = "shohruh"
console.log(obj)