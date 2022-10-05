//argument.length will count the number of arguments passed to function
//arguments is built-in method 



function arg(){
   for(var i=0;i<arguments.length;i++){
    console.log(arguments[i])
   }
   console.log("number of arguments passed " +  arguments.length)
}
arg(1,2,3)
