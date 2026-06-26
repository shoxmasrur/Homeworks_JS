function findSum(arr,n){
    const newArr=[]
    for(let i=0; i<arr.length; i++){
        for (let k=i+1; k<arr.length; k++){
            arr[i]+arr[k]===n && newArr.push([i,k]) 
        }
    }
    return newArr
}

console.log(findSum([2,4,5,6,7], 11))