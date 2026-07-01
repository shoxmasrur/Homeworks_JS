// const obj = {
//     set(num1){
//         return {
//             add(num2){

//             return {
//                 natija(){
//                     console.log( num1+num2 )
//                 }
//             }
//             }
//         }
//     }
// }

// obj.set(2).add(3).natija()


const obj = {
    value:0,
    set(num){
        this.value = num;
        return this;
    },
    add(num){
        this.value +=num;
        return this
    },
    natija(){
        console.log(  this.value )
    }
}

obj.set(3).add(3).add(5).natija()