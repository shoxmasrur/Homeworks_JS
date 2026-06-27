function diamond(n){
    for(let i=0;i<n;i++){
        const mid = Math.floor(n/2)
        let row = ""


        let stars=0;
        if(i<=mid){
            stars = 2*i+1;
        }else{
            stars = 2*(n-1-i)+1;
        }

        let spaces=0;
        spaces = (mid - (stars-1)/2)

        for(let s=0; s<spaces; s++){
            row =row +" "
        }
        for(let j=0; j<stars;j++){
            row=row+"*"
        }
        console.log(row)
    }
}

console.log(diamond(3))