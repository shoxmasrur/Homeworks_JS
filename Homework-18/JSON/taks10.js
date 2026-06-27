// const obj = {
//     name: "Aziz", 
//     age: 32,
//     isMarried: true,
//     address: {
//         city:"Navoiy",
//         district: "Navbahor"
//     }
// }

// const jsonFile =JSON.stringify(obj, null, 2);
// console.log(jsonFile)
// const city = JSON.parse(jsonFile, (key, value)=>{
//     if(key==="") return value
//     if(key==="address"){
//         return value.district
//     };
//     return value
// })
// console.log(city)



const obj = {
    name: "Aziz", 
    age: 32,
    isMarried: true,
    address: {
        city:"Navoiy",
        district: "Navbahor"
    }
}

const jsonFile =JSON.stringify(obj, null, 2);
console.log(jsonFile)
const city = JSON.parse(jsonFile,).address.city
console.log(city)