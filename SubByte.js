// Substitute the elements of a multidimensional array

function UnderSub(array) {
    var result=[]
    var temp
    for(let i=0; i<array.length/2; i++){
        temp = array[i]
        array[i] = array[array.length-1-i]
        array[array.length-1-i] = temp
    }
    return array
}

function SubByte(arr) {
    for(let i=0; i<arr.length-1; i++){
        UnderSub(arr[i])
    }
    return arr
}
// Ex:
// console.log(SubByte([[0,1,2,3],[4,5,6,7],[8,9,10,11],[12,13,14,15]]));