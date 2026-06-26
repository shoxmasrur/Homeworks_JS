const findLength =function(arr){
    let counter=0;
    for(let i of arr){
        counter++;
    }
    return counter
}
console.log(findLength([1,2,3,4]))