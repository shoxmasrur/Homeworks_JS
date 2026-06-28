function Products (name, price){
    this.name = name;
    this.price = price;

    // this.updatePrice = function(newPrice){
    //     this.price = newPrice
    // }
}

Products.prototype.updatePrice=function(newPrice){
    this.price = newPrice;
}

const mahsulot = new Products("olma", 300);
mahsulot.updatePrice(4000);
console.log(mahsulot)

