function removeDups(arr) {
    var unique = new Set(arr);
        let array = Array.from(unique);
        return array;
}

console.log(removeDups([1, 0, 1, 0])) 
console.log(removeDups(["The", "big", "cat"])) 
console.log(removeDups(["John", "Taylor", "John"])) 