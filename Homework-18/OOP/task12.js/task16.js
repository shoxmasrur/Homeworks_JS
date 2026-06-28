const hayvon ={
 moving:true
}


const it = Object.create(hayvon, {name:{
    value:"reks",
    writable:true,
    enumerable:true,
    configurable:true
}, 
age:{
    value:4,
    writable:true,
    enumerable:true,
    configurable:true
}
})

console.log(it.moving)