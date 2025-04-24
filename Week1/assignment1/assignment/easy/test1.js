const calculateTotalSpentByCategory = require("./expenditure-analysis.js");

const expected = [
  { category: "Food", totalSpent: 30 },
  { category: "Transport", totalSpent: 45 },
  { category: "Entertainment", totalSpent: 50 },
];

const result = calculateTotalSpentByCategory(transactions);

console.log(
  JSON.stringify(result) === JSON.stringify(expected)
    ? "✅ Test passed"
    : "❌ Test failed"
);
