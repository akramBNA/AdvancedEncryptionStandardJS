// First Step:
// Converting a string to hexadecimal

function hexEncode(string) {
    var result=""
    for(var i=0; i<string.length; i++){
       result += string.charCodeAt(i).toString(16)
         
    }
    return result
}
