let b = 10;      // Declare x, give it the value of 5
let c = b + 5;  // Declare y, give it the value of x + 2 
let d = b + c; //Adding x and y, give the value of z

//Write z to log
document.getElementById("b").innerHTML = ('The value of x is '+b);
document.getElementById("c").innerHTML = ('The value of y is '+c);
document.getElementById("comments").innerHTML = ('The value of z is '+d);