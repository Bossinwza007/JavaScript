const people = ["Aaron","Mel","John"];
const one = 1;
const str = "Hellow World";
const b = true;
const employee = {
    fistName : "Anirach",
    lastName : "Mingkwan",
};

function sayHello(person){
    console.log("Hello " + person.fistName);
}

console.log(typeof people);
console.log(typeof sayHello)
console.log(employee instanceof Array);
sayHello(employee);