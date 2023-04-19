// console.log(num1,a);
// var num1;
// num1=10;

// console.log(num1);
// var num1="asdf"//this can be redeclared and reassigned
// console.log(num1);

// function a(){

// }
// // //***************************************************** */
// //  console.log(num2);
// let num2;
// console.log(num2);
// num2= 50;
//  num2= 100;//this can be reassigned not redeclared
// console.log(num2);
// // //**************************************************** */
// // console.log(num3);
// const num3=25;
//  //const num3=50;//this can not be reassigned or redeclared
// console.log(num3);

//**************************************************** */
//  console.log("x=========",x )
let num=5;
// let num=6; //cannot redeclare globally
 const n=20;
var abc=7;
var x=15 //can be redeclared or re assigned grobally or locally
a ();
// b ();
console.log("x in global scope",x, num)
function a(){
    //   x= 20;
    //  console.log(num)
      var m=10;

     let num=500; //can redeclare locally
     let number=10; //cannot redeclare locally
     console.log("inside a",num)
    console.log("inside a",x,number,m);
    b();
    function b(){
        var x=100;
         const n=3 //const cannot be be reasigned
        console.log("inside b========",x, n, m,abc);
    }
}
// function b(){
//     var x=1
//      const n=30 //const cannot be be reasigned
//     console.log("inside b",x, n);
// }
// console.log("outside b",x, n);
// ======================================================
// const n=20;
// const array = [10,20, 30];

// array.push(50);
// console.log(array)

// {
//     const fruit="apple"
//     console.log("inside local scope",fruit, array);
//     console.log(n);
// }
// //  console.log(fruit);
//  console.log(n,array);