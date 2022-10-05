function isVowel(che) {
    che = che.toUpperCase();
    return che == "A" || che == "E" || che == "I" || che == "O" || che == "U";
}

function stringCheck(str) {
    var count = 0;
    for (var i = 0; i < str.length; i++)
        if (isVowel(str[i])){
             ++count;
             
        }
        if (str[i]==str[i+1]){
                --count
        }
    return count;


    }
    
    
   
var str = "CITIUSTECH";
console.log(stringCheck(str));
