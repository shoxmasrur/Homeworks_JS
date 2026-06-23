function moveZeroes(arr){
    const newArr=[];
    arr.reverse();
    for(let i of arr){
        i!==0 ? newArr.unshift(i): newArr.push(i);
        }
    return newArr;
}
console.log(moveZeroes([0,1,0,3,12]))