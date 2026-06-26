function findSecondMax(arr){
    return  [...arr].sort( (a,b)=>a-b).at(-2)
}

console.log(findSecondMax([2,1,2,3,4,5,6,7,]))