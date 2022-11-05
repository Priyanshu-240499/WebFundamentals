//Backend developer created senddata function

function  senddata( ){
    var promise =new Promise (function(success,reject){
        if (true){
            success("Success");
        }
        else{
            reject("Failure");
        }
    });
    return promise;
}

// Now as frontend developer you dont know what promise object contains;

var Mypromiseobject=senddata();

Mypromiseobject.then(function(data){
    console.log("sucess response");
    
},function(data){
    console.log("failure response");
});