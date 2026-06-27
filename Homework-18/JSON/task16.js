obj ={
    name:"Aziz",
    age:32,
    parol: 325546345
}

jsonFile = JSON.stringify(obj, (key,value)=>{
    if(key==="") return value;
    if(key=== "parol") return undefined
      
     
    
    return value;
})

obj = JSON.parse(jsonFile)
console.log(obj)