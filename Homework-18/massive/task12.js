function toqJuft(arr){
const obj = arr.reduce( (acc,curr)=>{curr%2===0? acc.juft.push(curr): acc.toq.push(curr); return acc }, {juft:[], toq:[]} )
return obj
}
console.log( toqJuft([1,3,4,5,6,3,4]) )