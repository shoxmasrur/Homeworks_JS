function ekub(num1,num2){
    for (let i=Math.min(num1,num2);i>=1;i--){
        if(num1%i==0 &&num2%i===0) return i;
    }
    
}
console.log( ekub(20,5) )