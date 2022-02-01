//Demo to use the cart module in our app
const amazon = require("./cart")//Gives an object of the Cart Class. 

amazon.addItemToCart({ 'id' : 123, 'name' : 'Samsung Note 11', 'price': 70000})
amazon.addItemToCart({ 'id' : 124, 'name' : 'Mi Note 11', 'price': 20000})
amazon.addItemToCart({ 'id' : 125, 'name' : 'Nokia  Simple', 'price': 2000})
amazon.addItemToCart({ 'id' : 126, 'name' : 'Jio Phone', 'price': 4000})

const items = amazon.getAll();
for (const item of items) {
    console.log(item);
}