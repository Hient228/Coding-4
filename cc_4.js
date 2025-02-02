//Task 1: If Statements
let purchaseAmount = 170; 
let finalAmount = purchaseAmount;

if (purchaseAmount > 100) {
    finalAmount = purchaseAmount * 0.1;
    console.log("Discount applied")
}

console.log(`Final amount after discount: $${finalAmount}`);

//Task 2: For Loop
let sales = [10, 70, 130, 90, 85];
let totalSales = 0;

for (let i = 0; i < sales.length; i++) {
    totalSales += sales[i];
}

console.log(`Total sales: $${totalSales}`);