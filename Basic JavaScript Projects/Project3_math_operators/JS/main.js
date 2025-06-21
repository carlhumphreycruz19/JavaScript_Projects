function addition_function() {
        var addition = 5 + 5;
         document.getElementById("math").innerHTML = "5 + 5 = " + addition;
}
function subtraction_function() {
        var subtraction = 10 - 5;
        document.getElementById("math2").innerHTML = "10 - 5 = " + subtraction;
}
function multiplication_function() {
        var multiplication = 10 * 5;
        document.getElementById("math3").innerHTML = "10 * 5 = " + multiplication;
}   
function division_function() {
        var division = 10 / 2;
        document.getElementById("math4").innerHTML = "10 / 2 = " + division;
}
function more_math() {
        var more_math = (1 + 2) * 10 / 2 - 5;
        document.getElementById("math5").innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " + more_math;
}   
function modulus_function() {
        var modulus = 25 % 6;
        document.getElementById("math6").innerHTML = "When you divide 25 by 6 you have a remainder of: " + modulus;
}       
function negation_function() {
        var x = 10;
        document.getElementById("math7").innerHTML = "The negation of 10 is: " + -x;
}   
var x = 10;
function increment_function() {
        x++;
        document.getElementById("math8").innerHTML = "The value of x after incrementing is: " + x;
}
var x = 10;
function decrement_function() {
        x--;
        document.getElementById("math9").innerHTML = "The value of x after decrementing is: " + x;
}
window.alert(Math.random()); // Generates a random number between 0 and 1
window.alert(Math.random() * 100); // Generates a random number between 0 and 100

math_object = {
    addition: function(a, b) {
        return a + b;
    },
    subtraction: function(a, b) {
        return a - b;
    },
    multiplication: function(a, b) {
        return a * b;
    },
    division: function(a, b) {
        return a / b;
    },
    modulus: function(a, b) {
        return a % b;
    }
};
