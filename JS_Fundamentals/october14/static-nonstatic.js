class user{
    name;
    static city;     //when all live in mumbai so instead of reassigning we can make it static
    email;
    constructor(name,email){
        this.name=name;
        this.email=email;
        user.city="Mumbai"; //when we use static we have to use class name(when it is nonstatic block) similar to java,because different momory is created for static
    }
    displaynameemail(){
        console.log(this.name,this.email ,user.city);//here we can access static properties using class name
    }
    static displaycity(){
        console.log(this.email);//It cannot be accessed
        console.log(this.city); //********here we can use this or class name as it is a static block*********
    }
}

var obj1=new user("Priyanhu","pc@gmail.com");
var obj2=new user("Priya","abc@gmail.com");
var obj3=new user("aksh","xyz@gmail.com");
obj1.displaynameemail();
user.displaycity(); //when we use static outside the class we have to use class name same as java 

