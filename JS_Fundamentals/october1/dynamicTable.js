function createTable(){
 var table=document.createElement('table');
 
var thead=document.createElement('thead');

var tbody=document.createElement('tbody');



var r1=document.createElement('tr');

var r2=document.createElement('tr');

var r3=document.createElement('tr');

var r4=document.createElement('tr');


var th1=document.createElement('th');
var th2=document.createElement('th');
var th3=document.createElement('th');

var td1=document.createElement('td');
var td2=document.createElement('td');
var td3=document.createElement('td');
var td4=document.createElement('td');
var td5=document.createElement('td');
var td6=document.createElement('td');
var td7=document.createElement('td');
var td8=document.createElement('td');
var td9=document.createElement('td');


td1.innerText="1";
td2.innerText="Priyanshu";
td3.innerText="Udaipur";
td4.innerText="2";
td5.innerText="Bipasha";
td6.innerText="Mumbai";
td7.innerText="3";
td8.innerText="Mukku";
td9.innerText="Jaipur";

th1.innerText="ID";
th2.innerText="Name";
th3.innerText="City";

r1.appendChild(th1);
r1.appendChild(th2);
r1.appendChild(th3);

r2.appendChild(td1);
r2.appendChild(td2);
r2.appendChild(td3);

r3.appendChild(td4);
r3.appendChild(td5);
r3.appendChild(td6);

r4.appendChild(td7);
r4.appendChild(td8);
r4.appendChild(td9);

thead.appendChild(r1);
tbody.appendChild(r2);
tbody.appendChild(r3);
tbody.appendChild(r4);

table.appendChild(thead);
table.appendChild(tbody);

table.className="table table-hover";
thead.className="table-dark"

document.getElementById("add_tbl").appendChild(table);

}