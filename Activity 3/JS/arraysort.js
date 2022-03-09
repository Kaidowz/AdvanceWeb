const fruity = ["Banana", "Orange", "Apple", "Mango", "Grapes"];

document.getElementById("txtonly").innerHTML = ('The example of Array Sort: ');
document.getElementById("arraysort").innerHTML = fruity;

fruity.sort();
document.getElementById("arraysort1").innerHTML = fruity;