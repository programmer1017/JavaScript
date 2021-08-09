function numbersting() {
    var i = 0;
    while (i < 10) {
        document.write(i);
        i+=1;
    }
}

numbersting();

var i = 0;

for (i = 0; i < 4; i++) {
    document.write("<br>");
} 


// Function with arguments

function AddTwoNumbers(num1, num2) {
    document.write(num1 + num2, "<br>");
}

AddTwoNumbers(10, 20) // prints 30
AddTwoNumbers(30, 40) // prints 70