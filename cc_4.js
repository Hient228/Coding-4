//Task 1: If Statements
let purchaseAmount = 170; 
let finalAmount = purchaseAmount;

if (purchaseAmount > 100) {
    finalAmount = purchaseAmount * 0.1;
    console.log("Discount applied")
}

console.log(`Final amount after discount: $${finalAmount}`);

//Task 2: For Loop
let sales =[120, 85, 200, 150, 90];
let totalSales = 0;

for (let i = 0; i < sales.length; i++) {
    totalSales += sales[i];
}

console.log(`Total sales: $${totalSales}`);

//Task 3: While Loop
let stock = 10;

while (stock > 0) {
    console.log(`Current stock: ${stock}`);
    stock--;
}

console.log("Stock is depleted.");

//Task 4: Do... While Loop
let responses = 0;

do {
    responses++;
    console.log(`Response count: ${responses}`);
} while (responses < 3);

//Task 5: For... In Loop
let employee = {
    name: "Alice",
    position: "Manager",
    salary: 75000
};

for (let key in employee) {
    console.log(`${key}: ${employee[key]}`);
}

//Task 6: For...Of Loop
let products = ["Laptop", "Mouse", "Keyboard"];

for (let product of products) {
    console.log(`Product: ${product}`);
}

//Task 7: forEach() Method
let orders = [101, 102, 103];

orders.forEach(order => {
    console.log(`Order ID: ${order}`);
});

//Task 8: Function Declaration
function calculateTax(amount) {
    return amount * 0.03;
}

console.log("Return of calculated tax:", calculateTax(1000));

//Task 9: Function Expressions
function applydiscount(number) {
    return number * 0.30
}
console.log("Discount is:" , applydiscount(300))
PriceAfterDiscount = 300 - applydiscount(300)
console.log("Price After 30% discount", PriceAfterDiscount )