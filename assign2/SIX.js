const fact=(n)=>{
    if (n==0||n==1){
        return 1
    }
    for(var i=0;i<n;i++){
         return(n*fact(n-1));
    }
}

console.log(fact(4))