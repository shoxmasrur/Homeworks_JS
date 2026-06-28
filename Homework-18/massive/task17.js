function moveRight(arr, n){
    let lastDigit = 0;
    for(let k=0;k<n;k++){
        lastDigit = arr.at(-1);
        for(let i=arr.length-1; i>0; i--){
            arr[i]=arr[i-1];
        }
        arr[0]=lastDigit;
    }
    return arr
}

console.log(moveRight([1,3,4,5,6],2))