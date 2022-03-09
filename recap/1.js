function numberSplit(number){
    let arr_sum = Array
    let num = number/2
    if(number % 2 == 0){
        arr_sum = [num,num]
    }
    else{
        arr_sum = [Math.floor(num),Math.floor(num+1)]
    }
    return arr_sum
}
console.log(numberSplit(4))
console.log(numberSplit(10))
console.log(numberSplit(11))
console.log(numberSplit(-9))