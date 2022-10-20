var obj1={
  num3:10,
};
var obj2={
    num3:15,
  };

  function fnAdd(num1,num2){
    console.log(num1+num2+this.num3);
  }
  fnAdd(10,20);

//   if sometime we want to use num3 of obj1 and sometime num3 of obj2 then we can use either call or 
// apply or bind and we can use this to point on our desired object
fnAdd.call(obj2,10,20);

// In apply we will pass object and an array with arguments hence two arguments
fnAdd.apply(obj1,[10,20]);

// For bind it will return the function result hence we have to catch in a variable
//when we call function in different ways
// ***var res=fnAdd.bind(obj2,10,20);
// res(); 

// ***var res=fnAdd.bind(obj2);
// res(10,20); 

// fnAdd.bind(obj2)(10,20);

// fnAdd.bind(obj2,10,20)();

// Interview question:- Explain call,Aplly bind


 

