class vehicle{
    display()
    {
        console.log("Vehicle class")
    }
}

class bike extends vehicle{
    display()
    {
        console.log("bike class")
    }

}

var b = new bike()
b.display()

var arrayObject = [new vehicle(), new bike()]
arrayObject.forEach(function(msg){
    msg.display()
});