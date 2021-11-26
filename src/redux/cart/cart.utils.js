export const addItemUtils = (cartItems, addItem) => {
	const existingItem = cartItems.find((x) => x.id === addItem.id);

	if (existingItem) {
		return cartItems.map((x) =>
			x.id === addItem.id ? { ...x, quantity: x.quantity + 1 } : x
		);
	}

	return [...cartItems, { ...addItem, quantity: 1 }];
};

export const removeItemUtils = (cartItems, cartItemToRemove) => {
	const existingCartItem = cartItems.find(
		(cartItem) => cartItem.id === cartItemToRemove.id
	);
	if (existingCartItem.quantity === 1) {
		return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
	}
	return cartItems.map((cartItem) =>
		cartItem.id === cartItemToRemove.id
			? { ...cartItem, quantity: cartItem.quantity - 1 }
			: cartItem
	);
};
