function sortArr(arr){
    let num =0;
    for(let k=0; k<arr.length; k++){
        for (let i=0; i<arr.length-k; i++){
            if (arr[i]>arr[i+1]){
                num =arr[i];
                arr[i]=arr[i+1]
                arr[i+1]=num
            }
        }
    }
    return arr
}

console.log(sortArr([3,1,2]) )