const armstrong = (num)=>{
    let sum =0;
    const number = num;
    const daraja = String(num).length
    while(num){
        let lastDigit = num%10;
        sum+=Math.pow(lastDigit, daraja)
        num = Math.floor(num/10)
    }
    return sum === number
}
console.log(armstrong(100))