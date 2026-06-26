function ekub(num1, num2){
    if (num1<=0 ||num2<=0) return "0 dan katta son kirting"
    for (let i=num1; i>0; i--){
        if (num1%i==0 && num2%i==0) return i
    }
}
console.log(ekub(36,18))