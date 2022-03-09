function highestDigit(num){
    var number
    var high = 0
    while(num != 0){
        number = num % 10
        if(number > high){
            high = Math.floor(number)
        }
        num = num / 10
    }
    return(high)
}

console.log(highestDigit(379))
console.log(highestDigit(2))
console.log(highestDigit(377401))