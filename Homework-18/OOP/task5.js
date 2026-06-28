// function Calculator(a,b){
//     this.a = a ;
//     this.b = b;

//    this.qosh=function(){
//     return this.a+this.b
//    };

//    this.ayir =function(){
//     return this.a - this.b
//    };

//    this.kopaytir = function(){
//     return this.a*this.b;
//    };
//    this.bol = function(){
//     return Math.round(this.a/this.b)
//    }
//     }

//     const obj1 = new Calculator(12, 4)
//     console.log(obj1.ayir())
//     console.log(obj1.bol())


function Calculator(a,b){
    this.a=a;
    this.b=b;
}

Calculator.prototype.qosh=function(){
    return this.a +this.b;
};
Calculator.prototype.ayir = function(){
    return this.a-this.b;
};
Calculator.prototype.kopaytir = function(){
    return this.a*this.b;
};
Calculator.prototype.bol = function(){
    return Math.floor(this.a/this.b)
}

const natija1 = new Calculator(3,4);
console.log(natija1.ayir())
