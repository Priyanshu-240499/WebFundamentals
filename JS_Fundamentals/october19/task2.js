function precourse(day1,day2,day3,fn){
    var attend=day1+day2+day3;
    if(attend>=270){
        console.log("Q")
        fn();
    }
    else{
        console.log("NQ");
    }
}
function testres(fn){
// Fetching data after calculation
   var res=80;
   if (res>=60){
    console.log("Q for C")
    fn();
   }
   else{
    console.log("Nq for C");
   }  
}

function FSDcourse(fn){
    var result="passed";
    if(result==="passed"){
        console.log("Allowed for placment");
        fn();
    }
    else{
        console.log("Not allowed for placment");
    }
}
function InterviewCracked(){
    var job="true";
    if(job=="true"){
        console.log("pay");
    }
    else{
        console.log(Reattemt);
    }
}

precourse(100,120,90,function() {
    testres(function(){
        FSDcourse(function(){
            InterviewCracked();
        });
    });
})