 class Parent{
    constructor(name){
     this.ParentName= "Rafeh"
    }
 }
 
 class Child extends Parent{
    constructor(name){
        super();
        this.name = name ;
    }
    Added(){  //method
        return this.name + " " + this.ParentName ;
    }
 }

 const childName= new Child("Aafi");
 console.log(childName.Added());
 console.log(childName)