obj = {
    name:"Sattor",
    age: 32,
    isMarried : true
}
const jsonFormat = JSON.stringify(obj)
const talaba = JSON.parse(jsonFormat)
console.log(talaba)