cars = [
    "Saab",
    "Volvo",
    "BMW"
  ];
  cars['my'] = "Duldul";
  console.log("cars is "+ cars+"<br>");
  console.log("cars['my'] is "+cars['my']+"<br>");
  cars[10]='Mercedes';
  
  console.log("<P>cars as an assoctiative array,<br>");
  for (var key in cars) {
      console.log(key + " = " + cars[key] + ', ');
  }
  
  console.log("<P>cars as array "+ cars+"<br>");