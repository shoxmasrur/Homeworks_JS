const noyob = (arr)=>{
    const set = new Set(arr);
    return arr =[...set].sort()
}
console.log( noyob([1,3,3,3,5,5,5]) )