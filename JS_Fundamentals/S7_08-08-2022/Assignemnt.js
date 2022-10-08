var Students = [
  //7
  {
    name: "S1",
    gender: "male",
    id: 101,
    city: "Hyd",
  },
  {
    name: "S2",
    gender: "female",
    id: 102,
    city: "Banglore",
  },
  {
    name: "S3",
    gender: "female",
    id: 103,
    city: "Pune",
  },
];

// Print those students who belongs from city hyd
for(var i=0;i<Students.length;i++){
  if(Students[i].city==="Hyd"){
    console.log(Students[i]);
  }
    
}

// print only male students
for(var i=0;i<Students.length;i++){
  if(Students[i].gender==="male"){
    console.log(Students[i]);
  }
}

//print only female students
for(var i=0;i<Students.length;i++){
  if(Students[i].gender==="female"){
    console.log(Students[i]);
  }
}

// print those students who belongs from city hyd or pune
for(var i=0;i<Students.length;i++){
  if(Students[i].city==="Hyd" || Students[i].city==="Pune"){
    console.log(Students[i]);
  }
}

// print all the students name,city
for(var i=0;i<Students.length;i++){
  console.log(Students[i].city ,Students[i].name);
}