function totalVolume(...num){
    var multiply = 1;
    var total = 0;
    for(var i = 0; i < num.length; i++){
        for(var j = 0; j < 3; j++){
            multiply *= num[i][j];
        }
        total += multiply
        if(j == 3){
            multiply = 1
        }
    }
    return total
}


console.log(totalVolume([4, 2, 4], [3, 3, 3], [1, 1, 2], [2, 1, 1]));
console.log(totalVolume([2, 2, 2], [2, 1, 1]));
console.log(totalVolume([1, 1, 1]));

