
//this code is correct only for number which is given
var num ='7312140905'
var count=0
for(i=0;i<num.length;i++){
    for(j=i+1;j<num.length;j++){
        if(num[i]==num[j]){
            count++;
        }

    }
}
console.log(count)