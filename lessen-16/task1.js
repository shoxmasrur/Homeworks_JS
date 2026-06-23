function twoSum(arr,sum){
    const newArr = [];
    for(let i=0; i<arr.length; i++){
        for(let k=i+1; k<arr.length; k++){
            if(arr[i]+arr[k]===sum){
                newArr.push([i,k]);
            }
        }
    }
    return newArr;
}

console.log(twoSum([2,7,11,15], 9));

