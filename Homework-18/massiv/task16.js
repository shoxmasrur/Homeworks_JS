function mostfrequent(arr){
    const obj ={}
    for (let i=0; i<arr.length;i++){
        obj[arr[i]] = (obj[arr[i]] || 0) +1
    }
    console.log(obj)
}
mostfrequent([1,1,1,5,6,7,4,3,2,1])
