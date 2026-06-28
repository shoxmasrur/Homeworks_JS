
// 1-variant;
const books = [
    {name:"O'tgan kunlar,", author: "Abdulla Qodiry", price: 20000},
    {name:"chernobel Tavallosi", author:"aleksandor", price:30000},
    {name:"kimyogar", author: "Paulo Coallo", price: 50000}
]


// function findCheapestBook(arr){
//     const cheapestBook = arr.reduce( (acc,curr)=>curr.price<acc.price ? curr:acc)
//     return cheapestBook
// }


// console.log(findCheapestBook(books))

// 2-variant


function findCeapestBook(){
    return {
    getCheapestBook(arr){
        return arr.reduce( (acc,curr)=>curr.price<acc.price? curr:acc)
    }
}
        
}

const book = findCeapestBook();
console.log( book.getCheapestBook(books) )