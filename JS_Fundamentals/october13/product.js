class product{
    brandName;
    modelName;
    quantity;
    price;
    totalamount;
    constructor(brandName,modelName,quantity,price,totalamount){
        
            this.brandName=brandName
            this.modelName=modelName
            this.quantity=quantity,
            this.price=price,
            this.totalamount=totalamount
    }
    displayDetails(){
        console.log(this.brandName,this.modelName,this.quantity,this.price,this.totalamount)
    };
}
var obj1=new product("Apple","iphone 14 pro",2,180000,360000);//object or instance of the class
obj1.displayDetails();

var obj2=new product();
obj2.displayDetails();

