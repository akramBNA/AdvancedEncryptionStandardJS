// Description:
// A Javascipst code that transform a hexadecimal code to string 

// Solution:

function HexDecode(nbr) {
    var hex = nbr.toString();
    var result =""
    for(let i=0;i<hex.length;i=i+2){
        result += String.fromCharCode(parseInt(hex.substr(i,2),16));
    }
    return result
}

// Ex: 616b72616d ==> "akram"
// console.log(HexDecode(616b72616d));