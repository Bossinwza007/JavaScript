function lostLetter(data){
    let letter = new Array;
    for (let i = 0; i < data.length; i++) {
        if (data.charCodeAt(i +1) - data.charCodeAt(i) != 1) {
            letter.push(String.fromCharCode(data.charCodeAt(i) + 1 ));
        }
    }

    letter.pop()
    if (letter.length == 0) {
        return "No Missing Letter"
    }
    else
        return letter
}

console.log(lostLetter("abdefgik"))
console.log(lostLetter("mnopqs"))
console.log(lostLetter("suvxyz"))
console.log(lostLetter("ghijklmno"))


