/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  let result = {};
  for (let i = 0; i < transactions.length; i++) {
    const transaction = transactions[i];
    const category = transaction.category;
    const price = transaction.price;

    // sum += price;

    if (category in result) {
      result[category] += price;
    } else {
      result[category] = price;
    }
  }

  return Object.keys(result).map((category) => {
    return {
      category: category,
      totalSpent: result[category],
    };
  });
}

transactions = [
  {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: "Food",
    itemName: "Pizza",
  },
  {
    id: 2,
    timestamp: 1656163200000,
    price: 20,
    category: "Food",
    itemName: "Burger",
  },
  {
    id: 3,
    timestamp: 1656249600000,
    price: 15,
    category: "Transport",
    itemName: "Bus Ticket",
  },
  {
    id: 4,
    timestamp: 1656336000000,
    price: 30,
    category: "Transport",
    itemName: "Train Ticket",
  },
  {
    id: 5,
    timestamp: 1656422400000,
    price: 50,
    category: "Entertainment",
    itemName: "Movie Ticket",
  },
];

module.exports = calculateTotalSpentByCategory;
