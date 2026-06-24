const ikkilik = (num)=>{
    if(num==0) return 0
    const arr = []
    while (num!==1){
    (num%2===0)? arr.unshift(0) : arr.unshift(1) ;
    num = Math.floor(num/2)
    }
    arr.unshift(1)
    return arr.join("")

    }
    
console.log(ikkilik(2) )