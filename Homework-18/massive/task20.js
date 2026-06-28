function openMassive(arr){
    for(let i=0; i<arr.length; i++){
        if(Array.isArray(arr[i])){
            arr.splice(i, 1, ...arr[i])
            openMassive(arr[i])
        }
    }
    return arr
}

console.log( openMassive([1,[1,2,[3,4,5],4,5,6],4,5,[1,[1,2]]]) )