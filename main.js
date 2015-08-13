var first_variable;
var food;
var new;

// Problem 1
console.log(first_variable);
first_variable = "Yipee I was first!";
function firstFunc() {
    first_variable = "Not anymore!!!";
    console.log(first_variable)
}
console.log(first_variable);

// Problem 2
food = "Chicken";
function eat() {
    var food;
    food = "half-chicken";
    console.log(food);
    food = "gone";       // NOTE: I'M TRYING TO TRICK YOU HERE!!!!
}
eat();
console.log(food);

// Problem 3
new = "NEW!";
function lastFunc() {
    new = "old";
}
console.log(new);
