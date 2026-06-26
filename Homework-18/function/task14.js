function reverseNumber(num){
    let newNum=0;
    while(num){
        let lastdigit = num%10
        newNum=newNum*10 +lastdigit;
        num = Math.floor(num/10);
    }
    return newNum;
}

console.log(reverseNumber(123))