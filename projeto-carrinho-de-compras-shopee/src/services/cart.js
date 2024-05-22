//quais ações que meu carrinho pode fazer 

//casos de uso
// ✅adicionar item  do carrinho
async function addItem(userCart, item){
  userCart.push(item); 
}
//calcular o valor total
async function calculateTotal(userCart){
    console.log("\nSopee cart total is:  ")
    const result = userCart.reduce((total, item)=> total + item.subtotal(), 0);
    console.log(`🎁Total: ${result}`)
}
// deletar item do carrinho
async function deleteItem(userCart, name){
    const index = userCart.findIndex((item) => item.name === name);

    if(index !== -1){
        userCart.splice(index, 1)
    }
}

// remover um item 
async function removeItem(userCart, item){
    const indexFound = userCart.findIndex((p) => p.name === item.name);

    console.log("Item encontrado")
    console.log(indexFound)

    //caso encontre o item
    if (indexFound == -1) {
        console.log("item nao encontrado");
        return
    }

    if (userCart[indexFound].quantity > 1) {
        userCart[indexFound].quantity -= 1;
        return;
    }
    
    if(userCart[indexFound].quantity == 1){
        userCart.splice(indexFound, 1)
    }
}

async function displayCart(userCart){
    console.log("\nSopee cart list")
    userCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} -  R$ ${item.price} | ${
            item.quantity
        } | Subtotal ${item.subtotal()}`);
    });
}


export {
    addItem,
    calculateTotal,
    deleteItem,
    removeItem,
    displayCart
}





