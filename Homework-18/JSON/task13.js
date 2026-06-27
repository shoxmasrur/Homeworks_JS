const users=[
    {name:"aziz", active:false},
    {name:"Shohruh", active:false},
    {name:"sattor", active:true}
]
const jsonFile = JSON.stringify(users,null,2);
const jsonFile2 = JSON.stringify(JSON.parse(jsonFile, (key, value)=>{
    if(key==="") return value;
    if (!isNaN(key)){
        value.active = true;
    }
    return value
}), null, 2)
console.log(jsonFile2)

