const Mahsulotlar ={
    "shakar":400, "olma":399, "shaptoli":200
}
const maxMah=Object.entries(Mahsulotlar).reduce( (acc,curr)=>{
   if( acc[1]<curr[1]){
    acc=curr;
    return acc
   } 
   return acc
} )

console.log(`eng qimmat mahsulot ${maxMah[0]} narxi: ${maxMah[1]}`)