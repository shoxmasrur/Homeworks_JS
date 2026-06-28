function temperature(){
    let Celsius = 0;
    return {
        getCelsius(){
            return Celsius;
        },
        setCelsius(amount){
            Celsius =amount;
        }
    }
}

const harorat = temperature();
harorat.setCelsius(34);
console.log(harorat.getCelsius())
harorat.setCelsius(21)
console.log(harorat.getCelsius())