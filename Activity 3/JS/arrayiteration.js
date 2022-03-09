const numbers = [45, 4, 9, 16, 25];
let txt = "";
numbers.forEach(myFunction);
document.getElementById("arrayiterationtxt").innerHTML = ('The example of Array Iteration : ');
document.getElementById("arrayiteration").innerHTML = txt;

function myFunction(value, index, array) {
  txt += value + "<br>";
}