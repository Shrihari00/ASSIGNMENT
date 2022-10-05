var arr=[12,34,23,4]
var i=0;
var j=0;
for(var p=0;p<arr.length;p++){
   var c=arr[p];
    if(i<c){
        j=i;
        i=c

    }
    else if(j<c){
        j=c;
    }
}
console.log(i);
console.log(j);
