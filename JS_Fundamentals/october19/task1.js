function Add(num1,num2,fn){//developer 1
    var res;
    setTimeout(() => {
        res=num1+num2;
        fn(res);
    }, 2000);
}
function mul(num1,num2){ //developer 2
    console.log(num1*num2);
}
function div(num1,num2){//developer 3
    console.log(num1/num2);
}
Add(10,20,function(res){//developer 2
    mul(res,10);
});
Add(10,20,function(res){//developer 3
    div(res,10);
});