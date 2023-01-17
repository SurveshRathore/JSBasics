function abstractFun(){
    this.vehicleName="vehicleName";  
    throw new Error("You cannot create an instance of Abstract Class");  
}

abstractFun.prototype.display=function()  
{  
    return "Vehicle is: "+this.vehicleName;  
}  
//Creating a constructor function  
function Bike(vehicleName)  
{  
    this.vehicleName=vehicleName;  
}  
//Creating object without using the function constructor  
Bike.prototype=Object.create(abstractFun.prototype);  
var bike=new Bike("Honda"); 

console.log(bike.display())

//var fun = new abstractFun();