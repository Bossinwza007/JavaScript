let numDays = (start,last) => {
    let startDate = new Date(start)
    let lastDate = new Date(last)
    let diff = (lastDate-startDate) / (1000 * 60 * 60 * 24) - 1
    return diff
}

console.log(numDays("June-12-2019","June 20,2019"))
console.log(numDays("December-28-2018","January 1,2019"))
console.log(numDays("June-25-2019","July 2,2019"))