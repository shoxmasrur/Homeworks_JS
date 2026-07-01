const doira = {
    radius : 20,
    Pi : 3.14159, 

}

doira["yuza"] =function(){
    return this.Pi * this.radius**2
}

console.log(doira.yuza())