let furniture = ['Table','Chairs','Couch'];
furniture.forEach(myFunction);
function myFunction(item) {
    console.log(item);
    for(let char of item) {
        console.log(char);
    }
}