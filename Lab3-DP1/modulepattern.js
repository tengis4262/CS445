// {id: 0, product: {id: 1, name: 'Coffee', description: 'Coffee Grounds from Ethiopia', price: 9.5}, count: 1}
const shoppingCart = (function(){
    const basket = [];

    function upsertItem(item) {
        let index = basket.findIndex(each => each.id === item.id);
        if(index < 0) {
            basket.push(item);
        } else {
            // basket[index].count += item.count;
            basket[index] = item;
        }

    }

    function getTotalPrice(){
        return basket.reduce((total, item) => total += item.product.price * item.count, 0 );    
    }

    function getItemsCount() {
        return basket.length;
    }

    function removeItemById(id){
        let index = basket.findIndex(item => item.id === id);
        basket.splice(index, 1);
    }

    return {
        upsertItem: upsertItem,
        getTotalPrice: getTotalPrice,
        getItemsCount: getItemsCount,
        removeItemById: removeItemById
    }

})();


const item1 = { id: 0, product: { id: 1, name: 'Coffee', description: 'Coffee Grounds from Ethiopia', price: 9 }, count: 1 }
const item2 = { id: 1, product: { id: 2, name: 'Tea', description: 'Oonlong Tea from China', price: 10 }, count: 5 }
const item3 = { id: 2, product: { id: 3, name: 'Bottled Water', description: 'Bottled Water from US', price: 2 }, count: 30 }

shoppingCart.upsertItem(item1);
shoppingCart.upsertItem(item2);
shoppingCart.upsertItem(item3);
console.log(shoppingCart.getTotalPrice()); //Expected Result: 119
item3.product.name = 'Himilayan Water';
item3.product.price = 10;

const item4 = { id: 2, product: { id: 3, name: 'Bottled Water', description: 'Bottled Water from US', price: 2 }, count: 2 }

shoppingCart.upsertItem(item4);

console.log(shoppingCart.getItemsCount()); //Expected Result: 3
console.log(shoppingCart.getTotalPrice()); //Expected Result: 359
shoppingCart.removeItemById(1);
console.log(shoppingCart.getItemsCount()); //Expected Result: 2
console.log(shoppingCart.getTotalPrice()); //Expected Result: 309