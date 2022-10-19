class A{
    name;
    city;
    printdetails(){
        console.log(this.name,this.city);
    }
}
class B extends A{
    email;
    constructor(name,city,email){
        super();//must call parent constructor
        this.name=name;
        this.city=city;
        this.email=email;
    }
    printAllDetails(){
        this.printdetails();
        console.log(this.email);
    }
}
var obj1=new B("Priyanshu","udaipur","priyanshoochoudhary@gamil.com");
obj1.printAllDetails();