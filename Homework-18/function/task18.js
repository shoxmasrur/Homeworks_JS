// function add(a){
//     return function(b){
//         return function(c){
//             return c+a+b
//         }
//     }
// }

// console.log(add(2)(3)(4))



// checksiz curring function


function add(a){

    return function(b){
        if(b!==undefined){
            return add(a+b)
        }
    
        return a;
    }
}

console.log(add(3)(4)(2)(4)())



