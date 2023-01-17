class sample{
    //Initializing an object  
    constructor(id,name)
    {
        this.id = id;
        this.name = name;
    }

    display()
    {
        console.log("The name is: " + this.name + " Id is: " + this.id);
    }
}

var sam1 = new sample(12, "hello")
sam1.display();