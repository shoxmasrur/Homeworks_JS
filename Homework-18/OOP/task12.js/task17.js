function greet(){
    console.log("salom", this.name);
}
const obj = {name:"Aziz", age:32};
const func = greet.bind(obj);
func();