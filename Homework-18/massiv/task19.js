function findMaxProfit(arr){
    const arr1=[];
    for(let i=0;i<arr.length-1; i++){
        arr1.push(arr[i+1]-arr[i])
    }
    return Math.max(...arr1)
}

console.log( findMaxProfit([1,3,4,5,1,8]) )