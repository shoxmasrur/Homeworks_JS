const obj ={a:10, b:20, c:30};
const newObj ={}
for(let i in obj){
    newObj[obj[i]] =i;
}
console.log(newObj)