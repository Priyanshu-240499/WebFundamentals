class A{
    calculate(num1,num2){
        console.log(num1+num2);
    }
}
class B extends A{
    calculate(num1,num2){
        super.calculate(num1,num2);
        console.log(num1-num2);
    }
}

var obj1=new B();
obj1.calculate(10,7);