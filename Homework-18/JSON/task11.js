const students = [
    {name:"Aziz", grade:90},
    {name:"Shohruh", grade:70},
    {name:"Salomat", grade:50},
    {name:"Aziza", grade:30}
]

const jsonFile = JSON.stringify(students, null, 2);
let avgGrade= 0;

const obj2 = JSON.parse(jsonFile, (key,value)=>{
    if(key=="") return value;
    if(!isNaN(key)){
        avgGrade+=value.grade/JSON.parse(jsonFile).length;
        return value;
    }
    return value
})

console.log(avgGrade)
console.log(obj2)
