const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "May"];

const year = [...q1, ...q2, ...q3, ...q4];
console.log(year);

let a, b, rest;

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);

let language = "JavaScript";
for (let x of language) {
    console.log(x);
}

/////////////////////////////////////////////////////

const cars = ["BMW", "Volvo", "Mini"];
for (let x of cars) {
    console.log(x);
}


let x=5;

{
    let x = 2;
    // console.log(x);
}

// console.log(x);


//----------------------------

var y =50;

{
    var y = 60;
}
// console.log(y)


//------------------------------

var  z = 90;
{
    const z = 55;
}

// console.log(z)




//----------------------

//Arrow functions allows a short syntax for writing function expressions.



var z1 = function(x1, y1) {
    return x1 * y1;
 }
 
 // ES6
 const z2 = (x1, y1) => x1 * y1;

 console.log(z1 (5,6))
 console.log(z2(4,6))


