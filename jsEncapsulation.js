class student{
    constructor(){
        var name;
        var marks;
    }
    setName(name){
        this.name = name;
    }
    getname(){
        return this.name;
    }

    setMarks(marks){
        if(marks<0 || marks > 100)
            console.log("Invalid marks");
        else    
            this.marks = marks;
    }
    getMarks(){
        
        return this.marks;
    }  
}

var s1 = new student()
s1.setName("hello")
s1.setMarks(-1)
s1.setMarks(78)

console.log(s1.getname() + ", Marks: " + s1.getMarks() )

