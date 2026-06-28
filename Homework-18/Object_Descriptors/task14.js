const obj = {
    name:"Aziz", 
    age: 32
}

Object.freeze(obj);

obj.name = "Shohruh";
delete obj.age;
console.log(obj)