const products = [
    {name: "olma", price:300},
    {name:"Anor", price:302},
    {name:"banan", price:290}
]

const jsonFile = JSON.stringify(products);
const jsonFile2 = JSON.stringify(JSON.parse(jsonFile, (key,value)=>{
    if (key===""){
        value.sort((a,b)=>a.price - b.price)
    }
    return value;
}), null, 2)
console.log(jsonFile2)