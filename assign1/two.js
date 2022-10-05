var rem=0;
var rev= 0;
var n=123
while(n!=0){
    rem=n%10;
    rev=rev*10+rem;
    //Math.floor is used to round off the value
    n=Math.floor(n/10);

    
}
document.write(rev)