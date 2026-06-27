// const mahsulotlar = {
//     "olma":80, "anor":50, "shaftoli":130, "uzum": 900
// }

// const jsonFile = JSON.stringify(mahsulotlar,null,2);

// const expensivePoducts = JSON.parse(jsonFile, (key,value)=>{
//     if(key==="") return value;
//     if(value<100) return value;
// })

// console.log(expensivePoducts)




const products = [
    {name:"olma", price:90},
    {name:"shaftoli", price:200},
    {name:"Anor", price : 30},
    {name:"Uzum", price:300}
]

const jsonFile = JSON.stringify(products, null, 2);
const expensiveProducts = JSON.parse(jsonFile, (key,value)=>{
    if(key==""){
        return value.filter( (item)=>item.price>100)
    }
    return value;
   
})
console.log(expensiveProducts)
