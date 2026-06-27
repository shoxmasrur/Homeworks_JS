const orders = [
    {buyurtma: 1, price:300},
    {buyurtma:2, price:400},
    {buyurtma:5, price:200}
]

let  countOrder = 0;
let sumOrder = 0;
const jsonFile = JSON.stringify(orders, null, 2);

const obj = JSON.parse(jsonFile, (key, value)=>{
    if(key===""){
       return countOrder= value.length;
    }
    if(!isNaN(key)){
        return sumOrder+=value.price;
    }
    return value;

})
console.log(`buyurmalar soni ${countOrder}\n umumiy summa ${sumOrder}`)