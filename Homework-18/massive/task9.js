function uniqueArr(arr){
    const set  = new Set( arr);
    return  [...set]
}
console.log(uniqueArr([1,2,3,42,1,2]))