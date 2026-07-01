const doira = {
    Pi :3.14159,
    radius: 4,
    yuza:function(){
        return Math.round (2* this.Pi*Math.pow(this.radius, 2) )
    }
}

const tortburchak = {
    balandlik: 3,
    eni: 34,
    yuza:function(){
        return this.balandlik* this.eni;
    }

}

console.log(doira.yuza())
console.log(tortburchak.yuza())