// Question No 1
var number1 = 3;
var number2 = 5;
var total = number1 + number2;
document.write("Sum of "+number1+ " and " +number2+ ' is '+total)

//Question No 2
//Substraction
console.log(number1 - number2)
//Multiplication
console.log(number1 * number2)
//Division
console.log(number1 / number2)
//Modulus
console.log(number1 % number2)
//Question No 3
var a;
document.write(`<hr>Value after declaration is` + " " + a);
a = 5;
document.write("<br>Initial value is " + a)
++a;
console.log(a);
document.write('<br>Value after increment is: ' + a);
var add =a + 7;
document.write("<br>Value after addition is: " + add);
--add;
document.write('<br>Value after decrement is:'+add);
var remainder = add % 3;
document.write(`<br>The remainder is: `+remainder)

//Question No 4
var ticketPrice = 600;
var tickets = 5;
var totalCost= ticketPrice * tickets ; 
document.write("<hr>Total cost to buy"+tickets+" tickets to a movie is "+totalCost+"PKR")

//Question No 5
var multiNumber = 4;
document.write("Table of "+multiNumber+"<br>")
document.write(multiNumber +" x " + 1 + " = " +multiNumber * 1+"<br>");
document.write(multiNumber +" x " + 2 + " = " +multiNumber * 2+"<br>");
document.write(multiNumber +" x " + 3 + " = " +multiNumber * 3+"<br>");
document.write(multiNumber +" x " + 4 + " = " +multiNumber * 4+"<br>");
document.write(multiNumber +" x " + 5 + " = " +multiNumber * 5+"<br>");
document.write(multiNumber +" x " + 6 + " = " +multiNumber * 6+"<br>");
document.write(multiNumber +" x " + 7 + " = " +multiNumber * 7+"<br>");
document.write(multiNumber +" x " + 8 + " = " +multiNumber * 8+"<br>");
document.write(multiNumber +" x " + 9 + " = " +multiNumber * 9+"<br>");
document.write(multiNumber +" x " + 10 + " = " +multiNumber * 10+"<br>");


//Question No 6
var celsius = 25;
var tofahren = (celsius * 9 / 5) + 32;
document.write("<hr>" + celsius+"C" + " is " + tofahren+"F");
var fahren = 70;
var tocelsius = (fahren - 32) * 5 / 9;
document.write("<br>" + fahren + "F is " + tocelsius+"%");

//Question No 7
document.write("<hr><h2>Shopping Cart</h2>")
var price_item1 = 650;
document.write("Price of item one is "+price_item1+"<br>")
var quanTity_item1 = 3;
document.write("Quantity of item 1 is"+quanTity_item1+"<br>")
var priceofitem2 = 100;
document.write("Price of item 2 is "+priceofitem2+"<br>")
var quantityofitem2 = 7;
document.write("Quantity of item 2 is "+quantityofitem2+"<br>")
var shippingCharges = 100;
document.write("Shipping Charges "+shippingCharges+"<br><br>")
var total = (price_item1 * quanTity_item1) + (priceofitem2 * quantityofitem2) + shippingCharges;
document.write("Total cost of your order is " + total);
//Question No 8
var totalMarks=980;
var obtained_marks=804;
console.log(obtained_marks * 100 / totalMarks);
document.write("<hr>Total Marks: "+ totalMarks +"<br>Marks Obtained: " +obtained_marks+("<br>Percentage: "+obtained_marks* 100/totalMarks)+"%")

//Question No 9
document.write("<hr><h2>Currency in PKR</h2>")
var dollar= 10;
var riyal= 25;
var grand_total=(dollar*104.80)+(25*28);
document.write("Total Currency in PKR: "+grand_total);

//Question No 10
var _number=((5*10) /2);
document.write("<hr>Arithmatic in single expression is: "+_number);

//Question No 11
var current_year=2017;
var birth_year=1996;
var age=(current_year-birthyear);
document.write(`<hr>They are either young or 24 years Old <br>Current Year: `+current_year+"<br>Birth Year: "+birth_year+'<br>Your Age is: '+age);
//Question No 12
document.write("<hr><h2>The Geometrizer</h2>")
var radius = 20;
document.write("Radius of a circle: "+radius+"<br>")
var circumference = (2*3.142) * 20;
document.write("The area is "+circumference+"<br>")
document.write("The area is: 1256.8")
//Question No 13
var favourite_snack="Chocolate Chip";
var current_age= 15;
var maximum_age= 65;
var estimated_perDay_snack=3;
var total_for_sparing_life=((maximum_age-current_age)*estimated_perDay_snack);
document.write("<hr>You will need "+total_for_sparing_life+" to last you until the ripe old age of "+maximum_age);









