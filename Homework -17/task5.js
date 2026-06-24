const fibonachi = (num)=>{
    if (num ==1) return [0];
    if (num ===2) return [0,1]

    const arr =[0,1];
    for (let i=2; i<num;i++){
        arr.push(arr.at(-1)+arr.at(-2))
    }
    return arr
}

console.log(fibonachi(3))