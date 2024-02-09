import { createContext } from 'react'

export const CartContext = createContext({
	items: [],
	addItemToCart: () => {},
	updateItemQty: () => {},
}) //this value is produced by cc will be object which will need later
//we can store any datatype value as an initial value
