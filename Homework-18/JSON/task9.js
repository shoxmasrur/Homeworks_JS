obj = {
    name:"Aziz",
    age:32,
    adress: "Toshkent"
}

const jsonFile = JSON.stringify(obj, null, 2);
const obj2=JSON.parse(jsonFile);
obj2["gender"]= "male"
const jsonFile2 = JSON.stringify(obj2, null, 2);
console.log(jsonFile2)