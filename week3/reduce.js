const arrayofNumber = [1,2,3,4,5];
 

const sum = arrayofNumber.reduce((accumulator,currentValue) => {
    return accumulator + currentValue;
});

console.log(sum);