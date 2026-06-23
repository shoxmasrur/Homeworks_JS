function maxProfit(arr){
    const newArr=[];
    let num =0;
    for (let i=1; i<arr.length-1; i++){
        if (arr[i+1]-arr[i]>0){
            newArr.push([arr[i+1]-arr[i], arr[i+1]])
        }
    }
     num = newArr.reduce( (acc, curr)=>acc[0]<curr[0] ? curr:acc)
    
     return num[1];
}
console.log(maxProfit([7,1,5,3,6,4]))