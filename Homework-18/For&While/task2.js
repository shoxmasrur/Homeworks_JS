function darajaOshirish(num, daraja){
    let sum = 1;
    for (let i=1;i<=daraja;i++){
        sum*=num;
    }
    return sum;
}
console.log(darajaOshirish(2,5))