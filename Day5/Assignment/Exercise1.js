<<<<<<< HEAD

// Module Pattern

const shoppingCart = (() => {
    let basket = [];
    return {
        upsertItem: (item) => {
            const index = basket.findIndex(basketItem => basketItem.id === item.id);
            if (index === -1) {
                basket.push(item);
            } else {
                basket[index] = item;
            }
        },
        
        removeItemById: (id) => {
            basket = basket.filter(item => item.id !== id);
        },
        getItemsCount: () => {
            return basket.length;
        },
        getTotalPrice: () => {
            let totalPrice = 0;
            for (const item of basket) {
                totalPrice = totalPrice + (item.count * item.product.price);
            }
            return totalPrice;
        },
    };

})();


=======
// Module Pattern




const shoppingCart = (() => {
    let basket = [];
    const upsertItem = (item) => {
        const index = basket.findIndex(basketItem => basketItem.id === item.id);
        if (index === -1) {
            basket.push(item);
        } else {
            basket[index] = item;
        }
    }
    const removeItemById = (id) => {
        basket = basket.filter(item => item.id !== id);
    }

    const getItemsCount = () => {
        return basket.length;
    }

    const getTotalPrice = () => {
        let totalPrice = 0;
        for (const item of basket) {
            totalPrice = totalPrice + (item.count * item.product.price);
        }

        return basket.reduce((total,item)=> total += item.product.price * item.count,0)
        return totalPrice;
    }
    return {
        upsertItem,
        removeItemById,
        getItemsCount,
        getTotalPrice
    };




})();





>>>>>>> d4215e10114cc87c3c863944e6e37985d94e829d
const item1 = { id: 0, product: { id: 1, name: 'Coffee', description: 'Coffee Grounds from Ethiopia', price: 9 }, count: 1 }
const item2 = { id: 1, product: { id: 2, name: 'Tea', description: 'Oonlong Tea from China', price: 10 }, count: 5 }
const item3 = { id: 2, product: { id: 3, name: 'Bottled Water', description: 'Bottled Water from US', price: 2 }, count: 30 }

<<<<<<< HEAD
=======



>>>>>>> d4215e10114cc87c3c863944e6e37985d94e829d
shoppingCart.upsertItem(item1);
shoppingCart.upsertItem(item2);
shoppingCart.upsertItem(item3);
console.log(shoppingCart.getTotalPrice()); //Expected Result: 119
item3.product.name = 'Himilayan Water';
item3.product.price = 10;
shoppingCart.upsertItem(item3);

<<<<<<< HEAD
=======



>>>>>>> d4215e10114cc87c3c863944e6e37985d94e829d
console.log(shoppingCart.getItemsCount()); //Expected Result: 3
console.log(shoppingCart.getTotalPrice()); //Expected Result: 359
shoppingCart.removeItemById(1);
console.log(shoppingCart.getItemsCount()); //Expected Result: 2
console.log(shoppingCart.getTotalPrice()); //Expected Result: 309