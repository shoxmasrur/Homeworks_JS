function reversedArr(arr){
    const newArr =[]
    for (let i of arr){
        newArr.unshift(i)
    }
    return newArr;
}

console.log(reversedArr( [1,2,3]))