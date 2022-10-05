function arg(){
    console.log("number of arguments passed " +  arguments.length)
    var sum=0
    for(var i=0;i<arguments.length;i++){
        sum=sum+arguments[i];
    }
    return sum;
    
    
 }
 result=arg(4,3,2,2,2,2)
 console.log('sum of arguments is: '+ result)