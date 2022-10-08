var btn1=document.getElementById("btn1");
var btn2=document.getElementById("btn2");
var table=document.getElementById("table");
var spandiv=document.getElementById("spandiv");
btn1.addEventListener("click",function(){
    
    btn2.style.display="inline-block";
    table.style.display="table";
    spandiv.style.display="flex";

})
btn2.addEventListener("click",function(){
    btn2.style.display="none";
    table.style.display="none";
    spandiv.style.display="none";
})
function filter_male(){
    var tr = table.getElementsByTagName("tr");
    
    
    for(var i=1;i<tr.length;i++){
        td=tr[i].getElementsByTagName("td");
        if(td[2].innerText=="Female"){
            tr[i].style.display="none";
        }
        else{
            tr[i].style.display="table-row"; 
        }
        
    }
}
function filter_female(){
    tr=table.getElementsByTagName("tr");
    for(var i=1;i<tr.length;i++){
        td=tr[i].getElementsByTagName("td");
        if(td[2].innerText=="Male"){
            tr[i].style.display="none";
        }
        else{
            tr[i].style.display="table-row"; 
        }
    }
}
function showAll(){
    tr=table.getElementsByTagName("tr");
    for(var i=1;i<tr.length;i++){
        if(tr[i].style.display==="none"){
            tr[i].style.display="table-row"; 
        }
    }
    
}