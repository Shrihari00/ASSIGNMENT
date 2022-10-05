let names= ['shrihari','prajit','satwik','manjunath','vikas']
arr3=[]
for (let i=0;i<names.length;i++){
       names[i]= names[i].slice(0,names[i].length-1) + names[i].slice(names[i].length-1).toUpperCase();
    }
console.log(names)

