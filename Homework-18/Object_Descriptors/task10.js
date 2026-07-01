const obj = {
    name:"Aziz"
}

Object.defineProperties(obj, {"age":{ 
    value:32,
    writable:true,
    enumerable: true,
    configurable:true
},

"address":{
    value:"Toshkent",
    writable:false,
    enumerable: true,
    configurable: false
},

"gender":{
    value:"male",
    writable:true,
    enumerable: true,
    configurable:true
}

})

console.log(obj)