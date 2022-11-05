function fn(){
    var promise=new Promise(function(resolve,reject){
    if(false){
resolve({
    state:"ok",
    results:[{name:"Priyanshu"},{name:"bipasha"}],
    header:{}
});
    }
    else{
        reject({
            state:"Not ok",
            mssg:"Error",
        })
    }
    });
    return promise;
}
 
function success(data){
    var promise=new Promise(function(resolve,reject){
        if(data.results[0].name=="Priyanshu"){
            resolve({name:"Priyanshu",city:"Udiapur",email:"priyanshoochoudhary@gmail.com"});
        }
        else{
            reject("No data found");
        }
    });
    return promise;
}


function failure(data){
    console.log(data.state);
}

var successresponse=
fn().then(function f1(data){
   successresponse=success(data);
   
},function f2(data){
    failure(data);
});

successresponse.then(function s1(data){
    console.log(data);
},function s2(data){
    console.log(data);
});
