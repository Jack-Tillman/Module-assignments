/* Froyo Survey */

/* 1) Create an object labeled customer with various key-value pairs */

const customer = {
    firstName: "jake",
    lastName: "smith",
    email: "jaekSmih!aol.com",
    phone: undefined,
    zipCode: "631",
    favoriteFlavors: 32,
    cupSize: "medium",
    favoriteStore: "Target",
    firstVisit: false,
}

/* 2) Modify some properties using bracket notation */

customer["email"] = "Jak3Smith1992@email.com";
customer["phone"] = 3195551234;
customer["zipCode"] = "63132";
customer["favoriteFlavors"] = "coffee, strawberry, and matcha";

console.table(customer);

/* 3) Delete zipCode and favoriteStore from customers object */
delete customer["zipCode"];
delete customer["favoriteStore"];

console.table(customer);

/* 3.5) Add three key-value pairs with dot notation */

customer.toppings = ["chocolate sprinkles", "wafer straws", "gummy bears"];
customer.futureFlavors = "mango";
customer.todaysPurchaseCost = 5.32;

console.table(customer);

/* 4) Print the keys in an array */
let array = []
for (const key in customer) {
    array.push(key);
};
console.log(array);

