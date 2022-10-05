var sum=0
var arr = [2,3,211,4,22,55,44,1,3,667]
for(var i=0;i<arr.length;i++){
    if(arr[i]%2==0){
        var sum= sum+arr[i];
    }


}
console.log("sum is " + sum)
if(sum==0){
    console.log("no even number found");
}
