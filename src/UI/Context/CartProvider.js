import { useState } from "react"
import CartContext from "./cart-context"

function CartProvider(props) {

    const [cartedItems, setCartedItems] = useState([])

    function addItemHandler(addItem) {
        
        let hasItem = false

        cartedItems.forEach((item, idx) => {
            if (item.id === addItem.id) {
                cartedItems[idx].amount = Number(addItem.amount) + Number(cartedItems[idx].amount)
                hasItem = true
            }
        })

        if (hasItem) {
            setCartedItems([...cartedItems])
        } else {
            setCartedItems([...cartedItems, addItem])
        }

    }

    function removeItemHandler(id) {
        
        cartedItems.forEach((item, idx) => {
            if (item.id === id && item.amount > 1 ) {
                cartedItems[idx].amount = cartedItems[idx].amount - 1
            } else if (item.id === id && item.amount === 1) {
                cartedItems.pop(idx)
            }
        })

        setCartedItems([...cartedItems])
    }

    let totalPrice = 0

    cartedItems.forEach(item => {
        totalPrice += (Number(item.price) * Number(item.amount))
    })

    const cartContext = {
        items: cartedItems,
        totalAmount: totalPrice,
        addItem: addItemHandler,
        removeItem: removeItemHandler
    }

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
}

export default CartProvider