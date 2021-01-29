function reverseWordsInString(str)
{
    var word = "", outputStr = "";
    for(var i = str.length - 1; i >= 0; i--) {
        if (str[i] == " ") {
            outputStr = " " + word + outputStr;
            word = "";
        }
        else {
            word += str[i];
        }
    }
    return word + outputStr;
}

function revserWord (str,i,j){
    while(i<j){
    str = str.slice(0,i)+str[j] + str.slice(i+1,j) + str[i] + str.slice(j+1)
    i++;
    j--
    }
    return str
    }
    
    var reverse = (str) => {
    // to get the start and end of a word
    for(let i=0; i<str.length; i++){
    let start;
    let end;
    while(i<str.length && str[i]===" "){i++} 
    start = i;
    while(i<str.length-1 && str[i+1] !== " ") {i++} 
    end = i;
    //update str with reversed word
    str = revserWord(str,start,end)
    }
    return str
    
    } 