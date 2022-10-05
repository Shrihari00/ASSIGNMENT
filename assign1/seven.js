a=[2,3,5,7]
function Fact(arr1){
    fact_arr=[];
    for(var i=0;i<arr1.length;i++){
        fact=1;
        for(let j=arr1[i];j>0;j--){
            fact=fact*j
        }
        fact_arr.push(fact);
    }
    console.log(fact_arr)
}
Fact(a)
