//Task 1: If Statements
let purchaseAmount = 170; 
let finalAmount = purchaseAmount;

if (purchaseAmount > 100) {
    finalAmount = purchaseAmount * 0.1;
    console.log("Discount applied")
}

console.log(`Final amount after discount: $${finalAmount}`);
