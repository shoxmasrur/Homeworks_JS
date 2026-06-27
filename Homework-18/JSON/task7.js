const users = [
    {name:'aziz', age:32},
    {name:"Abubakr", age:33},
    {name:"asila", age:42}
]

const jsonFile = JSON.stringify(users, null, 2)
const names= JSON.parse(jsonFile, (key, value)=>{
    if (key==="" ||!isNaN(key)) return value;
    if (key==="name") return  value;
})
console.log(names)

