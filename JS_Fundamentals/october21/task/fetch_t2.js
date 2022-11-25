var button=document.getElementById("MyButton");
button.addEventListener('click',()=>{
   //Method type =get--->For get we use fetch
//    URL=https://fakestoreapi.com/products
fetch("https://fakestoreapi.com/products")  //we are fetching data and it is returning data in promise(in binary format) so we are using then
.then(function resolve(data){
    return data.json(); //here we are using json to convert binary data to normal and it returns [rpmise]
},function reject(){
    console.log("error");
})
.then(function s1(data){//here we are handling the son format promise data
    console.log(data);  
    document.getElementById("rowdata").style.display="block"; 
    var count=1;
    data.forEach(element => {
        // if(element.category==="electronics"){
        var tr=document.createElement("tr");
        var td1=document.createElement("td");
        var td2=document.createElement("td");
        var td2_1=document.createElement("td");
        var td3=document.createElement("td");
        var td4=document.createElement("td");
        
        var img=document.createElement("img");
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td2_1);
        tr.appendChild(td3);
        tr.appendChild(td4)
        
        img.src=element.image;
        img.style.width="100px";
        img.style.height="100px";
        td1.appendChild(img);
        td2.innerHTML=element.title;
        td2_1.innerHTML=element.category
        td3.innerHTML=element.price;
        td4.innerText=count;
        count++;

        document.getElementById("tbody").appendChild(tr);
        // }
    });
}),function s2(){
    console.log("Something went wrong in conversion");
}
})
