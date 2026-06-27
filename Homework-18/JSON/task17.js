const obj = {
    name:"aziz",
    age:32,
    address: "Toshkent",
    dateOfBirth: "1993-09-15"
}


const jsonFile = JSON.stringify(obj);

const obj2 = JSON.parse(jsonFile, (key,value)=>{
    if(key==="") return value;
    if(key==="dateOfBirth"){
        return new Date(value)  
        
    }
    
    return value;
})

console.log(obj2)


