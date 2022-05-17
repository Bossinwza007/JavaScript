function returnDupStr(arr) {
    var unique = new Set(arr);
        let array = Array.from(unique);
        return array;
}

console.log(returnDupStr(["abcx", "abcx", "7890", "7890"]))
console.log(returnDupStr(["abc", "a1c", "a1c", "bcd", "bcd"]))
console.log(returnDupStr(["a test", "test1", "test"]))
console.log(returnDupStr(["1ac", "ab", "1a", "ab"]))