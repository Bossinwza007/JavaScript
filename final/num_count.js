function numcount(num){
    let count = 0;
    let number = [];
    let check = "";
    for (let i of num) {
        if (i == '0' || i == '1' || i == '2'|| i == '3' || i == '4' || i == '5' || i == '6' || i == '7'||  i == '8'||  i == '9') {
            check += i;
            count ++;
        }else {
            if(check != '');{
            number.push(parseInt(check));
            check = "";
            }
        }
    }
    return count;
}

console.log(numcount("123a57"));
console.log(numcount("ba45n7"));
console.log(numcount("javascript"));