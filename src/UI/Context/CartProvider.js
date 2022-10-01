import { useContext } from "react"
import CartContext from "./cart-context"

function CartProvider(props) {

    const ctx = useContext(CartContext)

    function addItemHandler(item) {
        ctx.items.push(item)
        console.log(ctx.items)
        props.updateCart(ctx.items.length)
    }

    function removeItemHandler(id) {}

    const cartContext = {
        items: [],
        totalAmount: 0,
        addItem: addItemHandler,
        removeItem: removeItemHandler
    }

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
}

export default CartProvider