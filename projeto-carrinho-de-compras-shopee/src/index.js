import createItem from "./services/item.js";
import * as cartService from "./services/cart.js";

const myCart = [];
const myWhishList = [];

console.log("Welcome to your Shopee Cart!")


//criando dois itens
const item1 = await createItem("Mouse", 20.99, 1);
const item2 = await createItem("Fone", 39.99, 3);

//adicionei itens
await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);

await cartService.removeItem(myCart, item2)

await cartService.removeItem(myCart, item2)

await cartService.displayCart(myCart);

//deletei itens
// await cartService.deleteItem(myCart, item2.name);
// await cartService.deleteItem(myCart, item1.name);


await cartService.calculateTotal(myCart);
