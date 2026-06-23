function merge(arr1,arr2){
    const newArr = arr1.concat(arr2).sort()
    return newArr;
}

console.log( merge([1,3,5], [2,4,6]) )