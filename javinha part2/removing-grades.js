let grades = [10, 7, 8, 5, 10];
let grades2 = [12, 14, 10, 8, 6];

let allGrades = grades.concat(grades2)
console.log(allGrades);

let average = (grades[0] + grades[1] + grades[2] + grades[3]) / grades.length

console.log(`The average of [${grades}] is ${average}`);
