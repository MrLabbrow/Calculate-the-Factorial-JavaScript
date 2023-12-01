var num = prompt("Enter any number");
var fact = 1;
for (let i = num; i > 0; i--) {
    fact = fact*i;
    console.log(fact);
    console.log(`Calculating Factorial ${fact} * ${i-1}`);
}

console.log(`The factorial of ${num} is ${fact}`);
alert(`The factorial of ${num} is ${fact}`)