function longestCommentPrefix(...arr){
let text =""
const minLength = arr.reduce( (acc, curr)=>curr.length<acc.length ? curr:acc).length
for (let i=0; i<minLength; i++){
    for(let k=1; k<arr.length; k++){
      if( arr[0][i]!==arr[k][i] ){
        return text;
      }
    }
    text+=arr[0][i];
}
return text;
}

console.log( longestCommentPrefix('salom', "sanyo", "saemn") )