const obj = {
    name: "Aziz", 
    age: 32
}
let desciptor =  Object.getOwnPropertyDescriptors(obj, "name");
console.log(desciptor) 