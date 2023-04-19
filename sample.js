const samArray = [12, 34, 54, 67, 13, 98, 67]

let x = samArray.sort()

console.log(x);

console.log(samArray.pop());

samArray.push(88)
console.log(samArray);

const doubleArray = samArray.map((ele)=> ele *2)

console.log(doubleArray);

const filterArray = samArray.filter((ele) => ele %2 == 0)

console.log(filterArray);

const filterArr = samArray.map((ele) => ele %2 == 0)
console.log(filterArr);
