function myFirst() {
    // myDisplayer("Hello JavaScript");
  }

  function myCalculator(num1, num2) {
    let sum = num1 + num2;
    // myDisplayer(sum);
  }
  
  

{
    (function(){
        console.log("calling function")
    }())
}
    
    
(()=>{
    console.log("callback function")
})()

myFirst()
myCalculator(5, 5);