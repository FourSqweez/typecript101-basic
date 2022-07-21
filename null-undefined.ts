// null / undefined

const calculateCartAmount = (cart: { qty: number; price: number } | null) => {
	// if (cart) {
	// 	return cart.qty * cart.price;
	// }
	// return 0
	return cart ? cart.qty * cart.price : 0; // ternary operator
};

const amount = calculateCartAmount(null);

console.log('amount: ', amount);
