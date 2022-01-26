const book = {
    tital : "1984",
    author : "George Orwell",
    isAvailable : false
};

const bookJSON = JSON.stringify(book);
console.log(bookJSON);

let Obook = JSON.parse(bookJSON);
console.log(Obook.tital);
console.log(Obook);